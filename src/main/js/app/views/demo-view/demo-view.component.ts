import {Component, OnInit} from '@angular/core';
import {globalModules, globalProviders} from '../../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {alphanumericWithSpaceValidator} from '../../validators/alphanumeric-with-space.validator';
import {DemoFacade} from '../../store/demo/demo.facade';
import {Demo} from '../../model/demo.model';
import {dateRangeValidator} from '../../validators/date-range.validator';
import {alphanumericValidator} from '../../validators/alphanumeric.validator';
import {newDateBeginOfDay, newDateEndOfDay} from '../../utils/date-utils';
import {SelectionType} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  providers: [...globalProviders],
  imports: [...globalModules],
  templateUrl: './demo-view.component.html'
})
export class DemoViewComponent implements OnInit {
  searchForm!: FormGroup;

  demoList: Demo[] = [];
  columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  loading: boolean = true;

  constructor(private demoFacade: DemoFacade, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      eingangVon: new FormControl(newDateBeginOfDay(), [Validators.required]),
      eingangBis: new FormControl(newDateEndOfDay(), [Validators.required]),
      system: new FormControl('', [alphanumericWithSpaceValidator(), Validators.maxLength(30)]),
      nachrichtentyp: new FormControl('', [alphanumericWithSpaceValidator(), Validators.maxLength(30)]),
      nummer1: new FormControl('', [alphanumericValidator(), Validators.maxLength(20)]),
      nummer2: new FormControl('', [alphanumericValidator(), Validators.maxLength(20)]),
    }, [dateRangeValidator('eingangVon', 'eingangBis')]);

    this.demoFacade.demoList$
      .subscribe((demoList: Demo[]) => {
        this.demoList = demoList;
      });
    this.demoFacade.loading$
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }

  get eingangVon() {
    return this.searchForm.get('eingangVon');
  }

  get eingangBis() {
    return this.searchForm.get('eingangBis');
  }

  get system() {
    return this.searchForm.get('system');
  }

  get nachrichtentyp() {
    return this.searchForm.get('nachrichtentyp');
  }

  get nummer1() {
    return this.searchForm.get('nummer1');
  }

  get nummer2() {
    return this.searchForm.get('nummer2');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  getTooltipText() {
    return 'Multi\nLine\nTooltip\nExample';
  }

  search() {
    this.demoFacade.search({
      eingangVon: this.eingangVon?.value,
      eingangBis: this.eingangBis?.value,
      system: this.system?.value,
      nachrichtentyp: this.nachrichtentyp?.value,
      nummer1: this.nummer1?.value,
      nummer2: this.nummer2?.value
    })
  }

  protected readonly SelectionType = SelectionType;
}
