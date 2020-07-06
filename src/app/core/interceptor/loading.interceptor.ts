import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  /**
   * URLs for which the loading screen should not be enabled
  */
  public skip_urls: string[] = [];
  public activeRequests: number = 0;


  constructor(private loading_screen: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let displayLoadingScreen = true;

    for (const skip_url of this.skip_urls) {

      if (new RegExp(skip_url).test(request.url)) {
        displayLoadingScreen = false;
        break;
      }
    }

    if (displayLoadingScreen) {

      if (this.activeRequests === 0) {

        this.loading_screen.startLoading();

        window.scrollTo(0, 0)
        let nodeList = document.getElementsByTagName("section");
        nodeList instanceof HTMLCollection;
        nodeList[0].classList.add('d-none');

      }

      this.activeRequests++;

      return next.handle(request).pipe(
        finalize(() => {

          this.activeRequests--;

          if (this.activeRequests === 0) {
            setTimeout(() => {

              this.loading_screen.stopLoading();

              let nodeList = document.getElementsByTagName("section");
              nodeList instanceof HTMLCollection;
              nodeList[0].classList.remove('d-none');

              window.scrollTo(0, 0);

            }, 500);
          }
        })
      )
    } else {
      return next.handle(request);
    }
  }
}
