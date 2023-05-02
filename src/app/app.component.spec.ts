import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SeachFilterTablePipe } from './pipes/seach-filter-table.pipe';
import { HeaderComponent } from './components/header/header.component';
import { button_exportComponent } from './components/buttons/button-export/button-export.component';
import { card_porcentajesComponent } from './components/cards-porcentajes/card-porcentajes.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SeachFilterTablePipe,
        HeaderComponent,
        button_exportComponent,
        card_porcentajesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dynamic_table'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dynamic_table');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dynamic_table app is running!');
  });
});
