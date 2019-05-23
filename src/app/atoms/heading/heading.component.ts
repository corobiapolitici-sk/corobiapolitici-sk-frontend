// Load angular modules.
import {
	Component,
	Input,
} from '@angular/core'

@Component({
	selector: 'app-heading',
	templateUrl: './heading.component.html',
	styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
	@Input() text: string
	@Input() type ? = 'h1'
}
