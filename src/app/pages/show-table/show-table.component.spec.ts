import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTableComponent } from './show-table.component';

describe('ShowTableComponent', () => {
  let component: ShowTableComponent;
  let fixture: ComponentFixture<ShowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShowTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
