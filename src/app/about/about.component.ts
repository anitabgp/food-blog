
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild } from '@angular/core';




@Component({

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: any;
  aboutdata: any;

  @ViewChild(AboutComponent, { static: false }) aboutComp: any;
  constructor(private http: HttpClient) {

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();

    }
  }

  ngOnInit(): void {
    this.http.get("https://dev-ptpxn4px0qhte57.api.raw-labs.com/about").subscribe({
      next: (data) => {  this.aboutdata = data },
      error: (e) => console.error(e),
      complete: () => {
        console.log(this.aboutComp);
      }
    })
  }
  ngAfterViewInit() {

  }
}
