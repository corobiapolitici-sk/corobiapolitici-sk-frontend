// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
	let component: ButtonComponent
	let fixture: ComponentFixture<ButtonComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [ButtonComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
