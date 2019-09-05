import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesBlockComponent } from './templates-block.component';

describe('TemplatesBlockComponent', () => {
  let component: TemplatesBlockComponent;
  let fixture: ComponentFixture<TemplatesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
