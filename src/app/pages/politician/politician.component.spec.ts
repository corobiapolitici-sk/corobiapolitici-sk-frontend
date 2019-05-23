// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { PoliticianComponent } from './politician.component'

describe('PoliticianComponent', () => {
	let component: PoliticianComponent
	let fixture: ComponentFixture<PoliticianComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [PoliticianComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(PoliticianComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
