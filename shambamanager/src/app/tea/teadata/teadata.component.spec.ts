import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeadataComponent } from './teadata.component';

describe('TeadataComponent', () => {
  let component: TeadataComponent;
  let fixture: ComponentFixture<TeadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
