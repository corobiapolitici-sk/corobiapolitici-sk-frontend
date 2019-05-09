import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          Poslanec {
            id,
            titul,
            priezvisko,
            email,
            bydlisko,
            fotografia,
            kandidovalZa,
            kraj,
            url,
            meno,
            klub {
              id,
              pocetPoslancov
            }
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }

}
