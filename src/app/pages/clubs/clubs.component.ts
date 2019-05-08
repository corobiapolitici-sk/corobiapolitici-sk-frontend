import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Club } from 'src/app/model-interfaces';
import { MatSnackBar } from '@angular/material';
import { handleFetchError } from 'src/app/utils';
import { clubFragment } from 'src/app/fragments';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs$: Observable<Club[]>;

  constructor(private apollo: Apollo, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.clubs$ = this.apollo
      .watchQuery({
        query: gql`
        {
          Club: Klub {
            ...Klub
          }
        }
        ${clubFragment}
        `,
      })
      .valueChanges.pipe(
        map(result => <Club[]> result.data['Club']),
        catchError(() => handleFetchError(this.snackBar, []))
      );
  }
}
