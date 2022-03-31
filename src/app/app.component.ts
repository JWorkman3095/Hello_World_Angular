import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Bootcamp';
  maxOn: boolean = true;
  names: string[] = [ "Ann", "Bob", "Chris", "Dale", "june" ];
  customers: any[] = [
    {id: 1, name: "MAX", sales: 10000, state: "OH" },
    {id: 2, name: "MPG", sales: 30000, state: "OH" },
    {id: 3, name: "Kroger", sales: 20000, state: "OH" }
  ];

  aString1: string = "";
  aString2: string = "";

  copy(): void {
    this.aString1 = this.aString2
  }

  clicked(): void{
    if(this.maxOn) {
      this.title = "The MAX bootcamp";
      this.maxOn = !this.maxOn;
    } else {
      this.maxOn = !this.maxOn;
    }
    
  }
}
