import { Routes } from '@angular/router';
import {DemoViewComponent} from './views/demo-view/demo-view.component';
import {DemoDetailsViewComponent} from './views/demo-details-view/demo-details-view.component';

export const routes: Routes = [
  {
    path:'',
    component: DemoViewComponent
  },
  {
    path: 'view',
    children: [
      { path:'demo', component: DemoViewComponent },
      { path:'demo-details', component: DemoDetailsViewComponent },
    ]
  }
];
