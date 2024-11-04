import {Component, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './demo-view.component.html',
  styleUrl: './demo-view.component.css'
})
export class DemoViewComponent implements OnInit {
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
}
