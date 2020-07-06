import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, NavigationStart } from '@angular/router';
import { LoadingService } from './core/services/loading.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private loading_screen: LoadingService) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      let nodeList = document.getElementsByTagName("body");
      nodeList instanceof HTMLCollection;
      nodeList[0].classList.add('overflow-hidden');

      window.scrollTo(0, 0);
      this.loading_screen.startLoading();

    }
    if (event instanceof NavigationEnd) {
      let nodeList = document.getElementsByTagName("body");
      nodeList instanceof HTMLCollection;
      nodeList[0].classList.remove('overflow-hidden');


      window.scrollTo(0, 0);
      this.loading_screen.stopLoading();

    }
  }

}
