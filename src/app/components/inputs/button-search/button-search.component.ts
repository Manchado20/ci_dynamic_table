import { Component, OnInit, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "app-button_search",
    templateUrl: "./button-search.component.html",
    styleUrls: ["./button-search.component.css"]
  })
  export class button_searchComponent {
    constructor(){ }
    searchText!:string;
    @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
    inputChanged(event:any) {
      this.searchText = event;
      return this.searchText;
    }

  }