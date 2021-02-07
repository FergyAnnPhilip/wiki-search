import { Component } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result:any = [];

  constructor(private wikiSearchService: WikiSearchService) {}

  onSearchWiki(searchWord:string) {
    this.wikiSearchService.wikiSearch(searchWord)
    .subscribe( (res: any) => {
      this.result = res;
      this.result = this.result.query.search;
      console.log(this.result);
    });
  }

  title = 'wiki-search';
}
