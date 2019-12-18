import { TestBed, async } from '@angular/core/testing';
import { Header } from  './header.component';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        Header,
      ],
    }).compileComponents();
  }));

  it('should create the Header component', () => {
    const fixture = TestBed.createComponent(Header);
    const list = fixture.debugElement.componentInstance;
    expect(list).toBeTruthy();
  });
});