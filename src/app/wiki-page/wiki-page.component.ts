import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements OnInit {

  @Input() result = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
