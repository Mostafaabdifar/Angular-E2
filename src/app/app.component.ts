import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  nodeName:string | null =null;

  ngOnInit(){
    this.nodeName = prompt("Enter root name:")
  }
  removeChild(e:number){
    alert("can not remove root")

  }
}
