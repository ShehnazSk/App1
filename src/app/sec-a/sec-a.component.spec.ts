import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAComponent } from './sec-a.component';

describe('SecAComponent', () => {
  let component: SecAComponent;
  let fixture: ComponentFixture<SecAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
