import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App';
  constructor(private router:Router){}

  student(){
    this.router.navigate(["/student"]);
  }
  studentDetails(){
    this.router.navigate(["/studentDetails"]);
  }
}
