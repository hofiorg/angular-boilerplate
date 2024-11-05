import {Component, inject, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {globalModules, globalProviders} from '../../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {alphanumericWithSpaceValidator} from '../../validators/alphanumeric-with-space.validator';

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

  message: string = '';
  errorMessage: string = '';
  data = {
    system: 'MockA'
  };

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      system: new FormControl(this.data.system, [
        alphanumericWithSpaceValidator(),
        Validators.maxLength(30)
      ]),
    });

    this.demoService.getDemoData().subscribe({
      next: (v) => {
        console.log(v);
        this.message = v;
      },
      error: (e) => {
        console.error(e)
        this.errorMessage = e;
      },
      complete: () => console.info('complete')
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

  loadingIndicator = false;

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
