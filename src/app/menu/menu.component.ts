import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onGoTohome() {
    this.router.navigate(['/']);

  }

  onGoTorecepie() {
    this.router.navigate(['/recepie']);

  }
  
  onGoTopages() {
    this.router.navigate(['/pages']);
  }

  onGoToAbout() {
    this.router.navigate(['/about']);
    
  }
  
  onGoToBlog() {
    this.router.navigate(['/footerimg']);
}

onGoTosub() {
  this.router.navigate(['/subscribe']);
}
}