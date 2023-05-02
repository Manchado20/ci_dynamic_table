import { Component, Output, EventEmitter } from '@angular/core';
import dataJson from '../assets/data.json';
import { USERS } from '../app/models/USERS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dynamic_table';
  searchText!: any;
  recibiRespuesta = [
    {
      name: 'Id',
      status: true,
      i: 0
    },
    {
        name: 'Full name',
        status: true,
        i: 1
    },
    {
      name:  'Address',
      status: true,
      i: 2
    },
    {
        name: 'Phone number',
        status: true,
        i: 3
    },
    {
        name: 'Email Address',
        status: true,
        i: 4
    },
    {
      name:  'Date',
      status: true,
      i: 5
    },
    {
      name:  'Campaign',
      status: true,
      i: 6
    },
    {
      name:  'Type',
      status: true,
      i: 7
    },
    // {
    //     name: 'Order status',
    //     status: true,
    // },
  ];

  ngOnInit() {
    
  }

  ngOnChanges() {
    
  }

  recibiAlgo (e: any) {
    console.log("recibo esto");
    console.log(e);
    this.recibiRespuesta = e;
  }
  
}
