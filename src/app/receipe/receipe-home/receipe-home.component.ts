import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-receipe-home',
  templateUrl: './receipe-home.component.html',
  styleUrls: ['./receipe-home.component.scss']
})
export class ReceipeHomeComponent implements OnInit, OnDestroy {
  navLinks: any;
  subscription: any;
  
  @ViewChild(SidenavComponent, { static: false }) sidenavComp: any;
  
  constructor(private http: HttpClient) {
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();

    }
  }
  ngOnInit(): void {
    this.subscription = this.http.get("https://dev-ptpxn4px0qhte57.api.raw-labs.com/links").subscribe({
      next: (data) => this.navLinks = data,
      error: (e) => console.error(e),
      complete: () => {
        console.log(this.sidenavComp);
      
         
       
      }
    }
    )
  }

  ngAfterViewInit() {
    //  console.log(this.sidenavComp);
  }
}
