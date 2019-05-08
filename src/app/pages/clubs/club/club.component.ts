import { MatSnackBar } from '@angular/material';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/model-interfaces';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { handleFetchError } from 'src/app/utils';
import { clubFragment } from 'src/app/fragments';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  club$: Observable<Club | {}> = null;
  constructor(private apollo: Apollo, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.club$ = this.apollo
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
        map(result => <Club> result.data['Club'][params['index']]),
        catchError(() => handleFetchError(this.snackBar, {})));
    });

  }

}
