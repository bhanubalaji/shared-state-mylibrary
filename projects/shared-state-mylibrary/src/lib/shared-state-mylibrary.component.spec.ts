import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStateMylibraryComponent } from './shared-state-mylibrary.component';

describe('SharedStateMylibraryComponent', () => {
  let component: SharedStateMylibraryComponent;
  let fixture: ComponentFixture<SharedStateMylibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedStateMylibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedStateMylibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
