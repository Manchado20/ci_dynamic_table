import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type DataType = { name: string };

@Injectable({ providedIn: 'root' })
export class MyService {
  dataSubject = new Subject<DataType>();
}
