import { Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
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
  

