import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wiki-searchbar',
  templateUrl: './wiki-searchbar.component.html',
  styleUrls: ['./wiki-searchbar.component.css']
})
export class WikiSearchbarComponent implements OnInit {

  @Output() searchWord = new EventEmitter<string>();

  keyWord:string = '';

  constructor() {}

  onSearch(event: any) {
    event.preventDefault();
    this.searchWord.emit(this.keyWord);
  }


  ngOnInit(): void {
  }

}
