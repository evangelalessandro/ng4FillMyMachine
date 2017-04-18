import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanmacchinaListComponent } from './companymacchina-list.component';

describe('CompanmacchinaListComponent', () => {
  let component: CompanmacchinaListComponent;
  let fixture: ComponentFixture<CompanmacchinaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanmacchinaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanmacchinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
