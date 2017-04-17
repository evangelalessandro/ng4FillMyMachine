import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaCaricoComponent } from './cerca-carico.component';

describe('CercaCaricoComponent', () => {
  let component: CercaCaricoComponent;
  let fixture: ComponentFixture<CercaCaricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaCaricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaCaricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
