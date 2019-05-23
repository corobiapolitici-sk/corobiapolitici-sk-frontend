// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
	let component: HomeComponent
	let fixture: ComponentFixture<HomeComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [HomeComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
