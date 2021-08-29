import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  showChild: boolean = false;
  sectionId : number = 0;
  template :number[]=[];

  constructor() { } 
  
  
  ngOnInit(): void {
  }

  addSection(){
    this.showChild = true;
    this.template.push(this.template.length)
    this.sectionId++;
  }
}
