import { TestBed, async } from '@angular/core/testing';
import { Header } from  './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule
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
  it('should have text for menu', () => {
    const fixture = TestBed.createComponent(Header);
    const menuText = fixture.nativeElement.innerText;
    expect(menuText).toContain('Menu');
  });
});