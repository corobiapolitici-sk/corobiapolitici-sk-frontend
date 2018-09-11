import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<{option, name}>;
  @Output() change = new EventEmitter<void>();

  onChange(value) {
    this.change.emit(value);
  }
}
