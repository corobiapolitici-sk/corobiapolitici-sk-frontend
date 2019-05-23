// Load angular modules.
import {
	Component,
	Input,
} from '@angular/core'

@Component({
	selector: 'app-card-with-icon',
	templateUrl: './card-with-icon.component.html',
	styleUrls: ['./card-with-icon.component.scss'],
})
export class CardWithIconComponent {
	@Input() title
	@Input() text
	@Input() iconSrc
}
