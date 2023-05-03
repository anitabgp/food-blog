import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor(private router: Router) { }


  ngOnInit(): void {
    
  }
  onGoTohome() {
    this.router.navigate(['/background.component']);
    
  }

  onGoTorecepie() {
    this.router.navigate(['/recepie.component']);
    
  }
  onGoTopages(){
    this.router.navigate(['/footerimg.component']);
  }
  onGoToAbout(){
    this.router.navigate(['/about.component']);
  }

}


