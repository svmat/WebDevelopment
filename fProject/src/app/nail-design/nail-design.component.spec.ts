import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailDesignComponent } from './nail-design.component';

describe('NailDesignComponent', () => {
  let component: NailDesignComponent;
  let fixture: ComponentFixture<NailDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
