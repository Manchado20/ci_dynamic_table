import { ComponentFixture, TestBed } from '@angular/core/testing';
import dataJson from '../../../assets/data.json';
import { tablaComponent } from './tabla.component';
import { USERS } from '../../interfaces/users';
import { SeachFilterTablePipe } from '../../pipes/seach-filter-table.pipe';
import { HeaderComponent } from '../../components/header/header.component';

describe('tablaComponent', () => {
  let component: tablaComponent;
  let fixture: ComponentFixture<tablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tablaComponent, SeachFilterTablePipe, HeaderComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Users correctly', () => {
    const expectedUsers: USERS[] = dataJson;
    console.log(expectedUsers);
    console.log(component.Users);
    expect(component.Users).toEqual(expectedUsers);
  });
});