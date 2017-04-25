import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmacchinaComponent } from './search-macchina.component';

describe('SearchmacchinaComponent', () => {
  let component: SearchmacchinaComponent;
  let fixture: ComponentFixture<SearchmacchinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmacchinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmacchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
