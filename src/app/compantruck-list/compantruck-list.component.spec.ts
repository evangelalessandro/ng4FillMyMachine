import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompantruckListComponent } from './compantruck-list.component';

describe('CompantruckListComponent', () => {
  let component: CompantruckListComponent;
  let fixture: ComponentFixture<CompantruckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompantruckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompantruckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
