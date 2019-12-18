import { TestBed, async } from '@angular/core/testing';
import { List } from  './list.component'
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


describe('List', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatBottomSheetModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatIconModule
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
  it('should update addName form field to "test"', () => {
    const fixture = TestBed.createComponent(List);
    const input = fixture.nativeElement.querySelector('.addName');
    input.value =  'test'
    expect(input.value).toBe('test')
  });
  it('should update addDescription form field to "test description"', () => {
    const fixture = TestBed.createComponent(List);
    const input = fixture.nativeElement.querySelector('.addDescription');
    input.value =  'test description'
    expect(input.value).toBe('test description')
  });
});