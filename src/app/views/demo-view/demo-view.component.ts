import {Component, inject, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {globalModules, globalProviders} from '../../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  message: string = '';
  errorMessage: string = '';

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
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
}
