import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsListComponent } from './cows-list.component';

describe('CowsListComponent', () => {
  let component: CowsListComponent;
  let fixture: ComponentFixture<CowsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
