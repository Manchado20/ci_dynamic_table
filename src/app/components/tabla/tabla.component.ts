import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, ChangeDetectorRef,  OnInit, Output, EventEmitter   } from "@angular/core";
import dataJson from '../../../assets/data.json';
import { USERS  } from "../../interfaces/users";
import { button_searchComponent } from '../inputs/button-search/button-search.component';
import { DataType, MyService } from '../../services/miservicio';
import { map } from 'rxjs';
import { SeachFilterTablePipe } from '../../pipes/seach-filter-table.pipe';

@Component({
    selector: "app-tabla",
    templateUrl: "./tabla.component.html",
    styleUrls: ["./tabla.component.css"]
  })
  export class tablaComponent {
    console = console;
    @Input() searchByKeyword!: string;
    @Input() estadoColumna!: any;



    Users: USERS[] = dataJson;
    constructor(){}

    regresarPos (obj:any, i: number) {
      return obj[i];
    }
    

    // https://morioh.com/p/ba5d38577528
  }
  