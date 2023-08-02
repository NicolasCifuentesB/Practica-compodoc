import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampleteFormComponent } from './tamplete-form.component';

describe('TampleteFormComponent', () => {
  let component: TampleteFormComponent;
  let fixture: ComponentFixture<TampleteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TampleteFormComponent]
    });
    fixture = TestBed.createComponent(TampleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
