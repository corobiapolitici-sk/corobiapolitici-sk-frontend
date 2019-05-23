// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { AppBarComponent } from './app-bar.component'

describe('AppBarComponent', () => {
	let component: AppBarComponent
	let fixture: ComponentFixture<AppBarComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [AppBarComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(AppBarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
