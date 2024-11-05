import {Component, inject, OnInit} from '@angular/core';
import {globalModules, globalProviders} from '../../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {alphanumericWithSpaceValidator} from '../../validators/alphanumeric-with-space.validator';
import {DemoFacade} from '../../store/demo/demo.facade';
import {Demo} from '../../model/demo.model';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  providers: [...globalProviders],
  imports: [...globalModules],
  templateUrl: './demo-view.component.html',
  styleUrl: './demo-view.component.css'
})
export class DemoViewComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  searchForm!: FormGroup;

  data = {
    system: 'MockA'
  };
  demoList: Demo[] = [];
  loading: boolean = true;

  constructor(private demoFacade: DemoFacade) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      system: new FormControl(this.data.system, [
        alphanumericWithSpaceValidator(),
        Validators.maxLength(30)
      ]),
    });

    this.demoFacade.demoList$
      .subscribe((demoList: Demo[]) => {
        console.log('demos', demoList);
        this.demoList = demoList;
      });
    this.demoFacade.loading$
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }

  get system() {
    return this.searchForm.get('system');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  getTooltipText() {
    return `Multi
    Line
    Tooltip
    Example`;
  }

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  search(): void {
    console.log('search');
    this.demoFacade.search({
      eingangVon: '',
      eingangBis: '',
      system: '',
      nachrichtentyp: '',
      nummer1: '',
      nummer2: ''
    })
  }
}
