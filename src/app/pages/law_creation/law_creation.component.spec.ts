// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { LawCreationComponent } from './law_creation.component'

describe('LawCreationComponent', () => {
	let component: LawCreationComponent
	let fixture: ComponentFixture<LawCreationComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [LawCreationComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(LawCreationComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
