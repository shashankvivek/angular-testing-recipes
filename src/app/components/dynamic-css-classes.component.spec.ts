/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div [ngClass]="{ 'alert': isAlert, 'success': !isAlert }"></div>
  `
})
class DynamicCssClassesComponent {
    @Input() isAlert: boolean = false;
}

describe('DynamicCssClassesComponent', () => {
  let component: DynamicCssClassesComponent;
  let fixture: ComponentFixture<DynamicCssClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCssClassesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have the .alert class if isAlert is set to true', () => {
    component.isAlert = true;
    fixture.detectChanges();

    let classes:any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.alert).toBeTruthy();
    expect(classes.success).toBeFalsy();
  });

  it('should have the .success class if isAlert is set to false', () => {
    component.isAlert = false;
    fixture.detectChanges();

    let classes:any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.success).toBeTruthy();
    expect(classes.alert).toBeFalsy();
  });
    
});
