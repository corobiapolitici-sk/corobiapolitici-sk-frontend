// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { SectionGrayComponent } from './section-gray.component'

describe('SectionGrayComponent', () => {
	let component: SectionGrayComponent
	let fixture: ComponentFixture<SectionGrayComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [SectionGrayComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(SectionGrayComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
