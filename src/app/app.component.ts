import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'food-blog';
  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  onGoTolatest() {
    this.router.navigate(['/recepielatest']);
    
  }

  onGoTorecepie() {
    this.router.navigate(['/recepie']);
    
  }
  onGoTopages(){
    this.router.navigate(['/footerimg']);
  }
  onGoToAbout(){
    this.router.navigate(['/about']);
  }

}
