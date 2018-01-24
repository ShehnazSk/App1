import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecDComponent } from './sec-d.component';

describe('SecDComponent', () => {
  let component: SecDComponent;
  let fixture: ComponentFixture<SecDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
