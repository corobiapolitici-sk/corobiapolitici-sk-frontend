import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-politician-list-item',
  templateUrl: './politician-list-item.component.html',
  styleUrls: ['./politician-list-item.component.css']
})
export class PoliticianListItemComponent implements OnInit {
  @Input() politician;

  ngOnInit() {
  }

}
