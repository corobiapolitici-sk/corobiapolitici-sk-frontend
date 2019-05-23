// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { TextComponent } from './text.component'

describe('TextComponent', () => {
	let component: TextComponent
	let fixture: ComponentFixture<TextComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [TextComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(TextComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
