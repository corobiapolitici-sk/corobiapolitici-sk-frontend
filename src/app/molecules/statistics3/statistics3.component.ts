import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-3',
  templateUrl: './statistics3.component.html',
  styleUrls: ['./statistics3.component.scss']
})
export class Statistics3Component {
  selectOptions = [
    {option: 'smer', name: 'SMER-SD'},
    {option: 'olano', name: 'OLANO'},
  ];
}
