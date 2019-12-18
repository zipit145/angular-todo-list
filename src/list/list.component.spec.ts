import { TestBed, async } from '@angular/core/testing';
import { List } from  './list.component'
import { MatSliderModule } from '@angular/material/slider';

describe('List', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule
      ],
      declarations: [
        List,
      ],
    }).compileComponents();
  }));

  it('should create the list component', () => {
    const fixture = TestBed.createComponent(List);
    const list = fixture.debugElement.componentInstance;
    expect(list).toBeTruthy();
  });

//   it(`should have as title 'angular-list'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('angular-list');
//   });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#main').textContent).toContain('Initial list');
  // });
});