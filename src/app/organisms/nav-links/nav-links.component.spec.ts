// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { NavLinksComponent } from './nav-links.component'

describe('NavLinksComponent', () => {
	let component: NavLinksComponent
	let fixture: ComponentFixture<NavLinksComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [NavLinksComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(NavLinksComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
