import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Politician } from 'src/app/model-interfaces';
import { handleFetchError } from 'src/app/utils';
import { politicianFragment } from 'src/app/fragments';

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.css']
})
export class PoliticianComponent implements OnInit {
  politician$: Observable<Politician>;

  constructor(private apollo: Apollo, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const politicianId = params['id'];
      if (politicianId) {
        this.politician$ = this.apollo
        .watchQuery({
          query: gql`
          {
            Politician: Poslanec(id: ${politicianId}) {
              ...PoliticianInfo
            }
          }
          ${politicianFragment}`,
        })
        .valueChanges.pipe(
          map(data => data['data']['Politician'][0]),
          catchError(() => handleFetchError(this.snackBar, {}))
        );
      }
    });
  }
}
