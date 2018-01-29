import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('div'));
    htmlElement = debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('default on load ERROR', () => {
     expect(htmlElement.querySelector('.vm-status .error').textContent.trim()).toBe('ERROR');
  });

  it('Setting status to OK', () => {
    component.statusCode = 'OK';
    fixture.detectChanges();
     expect(htmlElement.querySelector('.vm-status .ok').textContent.trim()).toBe('OK');
  });

  it('Setting status to OK', () => {
    component.statusCode = 'OK';
    fixture.detectChanges();
     expect(htmlElement.querySelector('.vm-status .ok').textContent.trim()).toBe('OK');
  });

  it('Class getting updated to error', () => {
    component.statusCode = 'ERROR';
    fixture.detectChanges();
     expect(htmlElement.querySelector('.vm-status .error')).not.toBeNull();
  });

  it('Class getting updated to ok', () => {
    component.statusCode = 'OK';
    fixture.detectChanges();
     expect(htmlElement.querySelector('.vm-status .ok')).not.toBeNull();
  });

  it('Font awesome css loaded?', () => {
     expect(htmlElement.querySelector('i').style.fontFamily).not.toEqual('');
  });

});
