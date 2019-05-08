import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Politician } from 'src/app/model-interfaces';
import { Apollo } from 'apollo-angular';
import { MatSnackBar } from '@angular/material';
import gql from 'graphql-tag';
import { map, catchError } from 'rxjs/operators';
import { handleFetchError } from 'src/app/utils';
import { politicianShortFragment } from 'src/app/fragments';

@Component({
  selector: 'app-politicians',
  templateUrl: './politicians.component.html',
  styleUrls: ['./politicians.component.css']
})
export class PoliticiansComponent implements OnInit {
  politicians$: Observable<Politician | {}> = null;

  constructor(private apollo: Apollo, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.politicians$ = this.apollo
    .watchQuery({
      query: gql`
      {
        Politician: Poslanec {
          ...PoliticianShort
        }
      }
      ${politicianShortFragment}
      `,
    })
    .valueChanges.pipe(
      map(result => <Politician[]> result.data['Politician']),
      catchError(() => handleFetchError(this.snackBar, {})));
  }
}
