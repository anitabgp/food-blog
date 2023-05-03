import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent  implements OnInit{
  constructor(private router: Router) { }

  
  ngOnInit() {
   
  }
    isActive = false;
    toggleActiveState(): void {
      this.isActive = !this.isActive;
    }
}
