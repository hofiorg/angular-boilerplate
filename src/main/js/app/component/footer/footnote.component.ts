import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'footnote',
    standalone: true,
    providers: [],
    imports: [],
    templateUrl: './footnote.component.html'
  })
  export class FootnoteComponent {
  
    version: string | undefined;
    timestamp: string | undefined;
    customer: string | undefined;
  
    constructor(private meta: Meta) {
      this.version = this.meta.getTag('name=version')?.content;
      this.version = this.version === '@project.version@' ? 'DEV-SERVER' : this.version;
      this.timestamp = this.meta.getTag('name=timestamp')?.content;
      this.timestamp = this.timestamp === '@timestamp@' ? '-' : this.timestamp;
      this.customer = this.meta.getTag('name=customer')?.content;
      this.customer = this.customer === '@customer@' ? '-' : this.customer;
    }
}