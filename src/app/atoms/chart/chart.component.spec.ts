// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { ChartComponent } from './chart.component'

describe('ChartComponent', () => {
	let component: ChartComponent
	let fixture: ComponentFixture<ChartComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [ChartComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(ChartComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
