import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMenuComponent } from './preview-menu.component';

describe('PreviewMenuComponent', () => {
  let component: PreviewMenuComponent;
  let fixture: ComponentFixture<PreviewMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
