import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';
import {provideHttpClient, withFetch} from '@angular/common/http';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch())
      ]
    });
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
