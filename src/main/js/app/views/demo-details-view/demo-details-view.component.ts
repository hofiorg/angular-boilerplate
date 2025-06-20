import {Component, OnInit} from '@angular/core';
import {globalModules, globalProviders} from '../../app.component';
import {Router} from '@angular/router';

@Component({
    selector: 'demo-details-view',
    providers: [...globalProviders],
    imports: [...globalModules],
    templateUrl: './demo-details-view.component.html'
})
export class DemoDetailsViewComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['view/demo']).then();
  }
}
