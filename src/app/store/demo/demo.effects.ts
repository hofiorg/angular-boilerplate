import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {DemoService} from '../../services/demo.service';
import {catchError, map, mergeMap, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {DemoActionTypes} from './demo.actions';
import {Demo} from '../../model/demo.model';

@Injectable({
  providedIn: 'root'
})
export class DemoEffects {
  private readonly actions$ = inject(Actions);
  private readonly service = inject(DemoService);

  constructor() {
  }

  // noinspection JSUnusedGlobalSymbols
  search$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(DemoActionTypes.SEARCH_DEMOS),
        mergeMap(() => {
          return this.service.search().pipe(
            map((demoList: Demo[]) => ({
              type: DemoActionTypes.SEARCH_DEMOS_SUCCESS,
              demoList
            })),
            catchError((error) => of({error, type: DemoActionTypes.SEARCH_DEMOS_FAIL}))
          );
        })
      );
    }
  );
}
