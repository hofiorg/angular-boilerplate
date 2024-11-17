import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'footnote',
    standalone: true,
    providers: [],
    imports: [],
    templateUrl: './footnote.component.html',
    styleUrl: './footnote.component.css'
  })
export class FootnoteComponent implements OnInit {
  private static hasLogged = false;

  version: string | undefined;
  timestamp: string | undefined;
  customer: string | undefined;
  currentYear = new Date().getFullYear();
  companyName = 'hofi.org'

  constructor(private meta: Meta) {
  }

  ngOnInit(): void {
    this.version = this.meta.getTag('name=version')?.content;
    this.version = this.version === '@project.version@' ? 'DEV-SERVER' : this.version;
    this.timestamp = this.meta.getTag('name=timestamp')?.content;
    this.timestamp = this.timestamp === '@timestamp@' ? 'DEV-SERVER' : this.timestamp;
    this.customer = this.meta.getTag('name=customer')?.content;
    this.customer = this.customer === '@customer@' ? 'DEV-SERVER' : this.customer;

    if (!FootnoteComponent.hasLogged && this.version !== undefined) {
      console.info(
        `© ${this.currentYear} ⋅ ${this.companyName} ⋅ Build-version: ${this.version} ⋅ Build-timestamp: ${this.timestamp} ⋅ Customer: ${this.customer}`
      );
      FootnoteComponent.hasLogged = true; // Set the flag to true after logging
    }
  }
}