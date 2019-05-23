// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

import { LoadingErrorIndicatorComponent } from './loading-error-indicator.component'

describe('LoadingErrorIndicatorComponent', () => {
	let component: LoadingErrorIndicatorComponent
	let fixture: ComponentFixture<LoadingErrorIndicatorComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [LoadingErrorIndicatorComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadingErrorIndicatorComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
