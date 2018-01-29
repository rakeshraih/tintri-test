import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnChanges {

  // initializing default values.
  statusCode = 'ERROR';
  name = 'Critical Vms';
  description = 'All my business-critical Vms';
  path = '/TINTRI/CRITICAL-VMS';
  vmCount = 16;
  errorCount = 10;
  vmCountLabel = 'VMs';
  errorCountLabel = 'ERRORS';
  @Input() status: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   this.statusCode = this.status.statusCode ? this.status.statusCode : this.statusCode;
   this.name = this.status.name ? this.status.name : this.name;
   this.description = this.status.description ? this.status.description : this.description;
   this.path = this.status.path ? this.status.path : this.path;
   this.vmCount = this.status.vmCount ? this.status.vmCount : 16;
   this.errorCount = this.status.errorCount ? this.status.errorCount : 10;
  }

}

//https://jsfiddle.net/rakeshraih/1hk7knwq/300/