// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { ClubsComponent } from './clubs.component'

describe('ClubsComponent', () => {
	let component: ClubsComponent
	let fixture: ComponentFixture<ClubsComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [ClubsComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(ClubsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
