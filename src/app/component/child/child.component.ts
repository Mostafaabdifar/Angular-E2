import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('secId') sectionId:number = 0;
  childTemplate:number[] = [];
  nestedChild:boolean =false;

  
  constructor() { }

  ngOnInit(): void {
  }

  createChild(){
    this.nestedChild =true;
    this.sectionId++;
    this.childTemplate.push(this.childTemplate.length+1);

  }
}
