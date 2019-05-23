// Load angular modules.
import {
	Component,
	Input,
} from '@angular/core'

@Component({
	selector: 'app-politician-list-item',
	templateUrl: './politician-list-item.component.html',
})
export class PoliticianListItemComponent {
	@Input() politician
}
