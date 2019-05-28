// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { TopTimeSpeakClubLawStatisticComponent } from './top_time_speak_club_law.component'

describe('StatisticsComponent', () => {
	let component: TopTimeSpeakClubLawStatisticComponent
	let fixture: ComponentFixture<TopTimeSpeakClubLawStatisticComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [TopTimeSpeakClubLawStatisticComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(TopTimeSpeakClubLawStatisticComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
