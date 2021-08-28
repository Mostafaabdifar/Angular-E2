import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  temp:number = 2;
  
  constructor() { } 
  
  
  ngOnInit(): void {
  }

  addSection(id:number){
    let section = document.createElement('section');
    section.setAttribute('id', `${this.temp}`)
    section.innerHTML = `<p>section works!</p>
    <button (click)="addSection(${this.temp})">Click</button>`;
    document.getElementById(`${id}`)?.appendChild(section);
    this.temp++;
  }
}
