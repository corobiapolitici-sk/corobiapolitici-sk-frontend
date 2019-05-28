// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { InfoComponent } from './info.component'

describe('InfoComponent', () => {
	let component: InfoComponent
	let fixture: ComponentFixture<InfoComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [InfoComponent]
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
