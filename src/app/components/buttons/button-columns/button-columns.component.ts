import { outputAst } from "@angular/compiler";
import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from "@angular/core";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { MyService } from '../../../services/miservicio';

import {CdkDrag, CdkDragDrop, CdkDragMove, DragDropModule , moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: "app-button_columns",
    templateUrl: "./button-columns.component.html",
    styleUrls: ["./button-columns.component.css"]
  })
  export class button_columnsComponent {

    titulos = [
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
    public open = false;

    //abrir cerrar menu

    menuAccion () {
      if(this.open){
        this.open = false;
      }else {
        this.open = true;
      }
    }

    // mandar el cambio del check
    @Output() miEvento = new EventEmitter<boolean>();
    cambios(e: any) {
      if(e.target.checked){        
        console.log("envio esto");
        console.log(this.titulos)
        this.mandarEvento (this.titulos);
      }else {
        console.log("envio esto");
        console.log(this.titulos)
        this.mandarEvento (this.titulos);
      }
    }

    mandarEvento (e: any){
      this.miEvento.emit(e)
    }

    // funcion de drag and drop
    
    dragSrcEl = null;
    idTarget = 0;

    handleDragStart(e:any) {
      // Target (this) element is the source node.
      e.target.style.opacity = '0.4';
 
      this.dragSrcEl = e.target;
      this.idTarget = e.target.getAttribute('data-index');
      e.target.classList.add("agarrando");
    }

    handleDragOver(e:any) {
      e.preventDefault();
      
      return false;
    }

    handleDragEnter(e:any) {
      e.target.classList.add("sobreObj");
    }

    handleDragLeave(e:any) {
      e.target.classList.remove("sobreObj");
    }

    handleDrop(e:any) {
      e.stopPropagation();

      let id1 = e.target.getAttribute('data-index');

      e.target.classList.remove("sobreObj");

      let temp = this.titulos[id1];
      this.titulos[id1] = this.titulos[this.idTarget];
      this.titulos[this.idTarget] = temp;

      this.mandarEvento (this.titulos);
    }


    handleDragEnd(e:any) {
      e.target.classList.remove("agarrando");
      e.target.style.opacity = '1';
      
    }

  }
  