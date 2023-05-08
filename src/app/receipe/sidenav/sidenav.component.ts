import { Component ,OnInit, ChangeDetectorRef} from '@angular/core';
import { Router} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  navLinks = [{
    name: "Recepie",
    href: "/recepie"
  },
  {
    name: "Latest Recepie",
    href: "/recepie/latest"
  },
  {
    name: "Tranding Recepie",
    href: "/recepie/trending"
  }
];
private _mobileQueryListener: () => void;
  constructor(private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }


  ngOnInit(): void {
  }

  }
  

