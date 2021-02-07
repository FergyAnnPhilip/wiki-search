import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchHeaderComponent } from './wiki-search-header.component';

describe('WikiSearchHeaderComponent', () => {
  let component: WikiSearchHeaderComponent;
  let fixture: ComponentFixture<WikiSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiSearchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
