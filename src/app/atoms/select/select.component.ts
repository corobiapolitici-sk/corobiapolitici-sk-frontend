// Load angular modules.
import {
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core'

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
	@Input() options: {
		name: string,
		value: string,
		selected: boolean,
	}[]
	@Output() changeValue = new EventEmitter<string>()

	onChange(value: string) {
		this.changeValue.emit(value)
	}
}
