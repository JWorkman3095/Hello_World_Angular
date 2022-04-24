import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  fName: string = "Jeff Workman";

  ngOnInit(): void {
  }

}
