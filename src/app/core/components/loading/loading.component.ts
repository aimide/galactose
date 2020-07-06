import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public debounceTime: number = 0;
  public loadingSubscription: Subscription;

  constructor(
    private loading_screen: LoadingService,
    private element_ref: ElementRef,
    private change_detector_ref: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.element_ref.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loading_screen.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this.element_ref.nativeElement.style.display = status ? 'block' : 'none';
        this.change_detector_ref.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
