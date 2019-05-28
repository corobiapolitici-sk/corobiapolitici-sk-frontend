// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { TimeSpeakClubStatisticComponent } from './time-speak-club.component'

describe('StatisticsComponent', () => {
	let component: TimeSpeakClubStatisticComponent
	let fixture: ComponentFixture<TimeSpeakClubStatisticComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [TimeSpeakClubStatisticComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(TimeSpeakClubStatisticComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
