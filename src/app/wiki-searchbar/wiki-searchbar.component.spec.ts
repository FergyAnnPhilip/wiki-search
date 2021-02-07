import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchbarComponent } from './wiki-searchbar.component';

describe('WikiSearchbarComponent', () => {
  let component: WikiSearchbarComponent;
  let fixture: ComponentFixture<WikiSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
