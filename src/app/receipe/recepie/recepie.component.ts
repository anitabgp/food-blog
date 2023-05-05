import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.scss']
})
export class RecepieComponent implements OnInit{
  constructor(private router: Router) { }


  ngOnInit(): void {
    
  }

  onGoTorecepie() {
    this.router.navigate(['/recepie']);

}
}