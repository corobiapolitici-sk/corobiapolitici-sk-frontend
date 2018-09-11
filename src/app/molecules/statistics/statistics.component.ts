import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  selectOptions = [
    {option: 'smer', name: 'SMER-SD'},
    {option: 'olano', name: 'OLANO'},
  ];
}
