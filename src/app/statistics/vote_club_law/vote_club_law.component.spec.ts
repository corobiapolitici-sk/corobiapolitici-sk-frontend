// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { VoteClubLawStatisticComponent } from './vote_club_law.component'

describe('StatisticsComponent', () => {
	let component: VoteClubLawStatisticComponent
	let fixture: ComponentFixture<VoteClubLawStatisticComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [VoteClubLawStatisticComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(VoteClubLawStatisticComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
