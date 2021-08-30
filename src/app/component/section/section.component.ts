import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input('name') nodeName: string = "";
  @Input('id') id:number | undefined;
   
  @Output('remove') destroy:EventEmitter<number> = new EventEmitter();

  nodeList:string[] =[];

  constructor() { } 
  
  
  ngOnInit(): void {
  }
  
  addChild(){
    let name = prompt("Enter Node Name:") || 'UnKnow';
    this.nodeList.push(name);
  }

  removeNode(index:number){
    this.nodeList.splice(index,1);
  }

  destroyNode(){
    this.destroy.emit(this.id);
  }

} 
