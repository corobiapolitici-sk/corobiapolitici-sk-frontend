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
	@Input() options: Array<{
		option: string,
		name: string,
	}>
	@Output() change = new EventEmitter<any>()

	onChange(value: any) {
		this.change.emit(value)
	}
}
