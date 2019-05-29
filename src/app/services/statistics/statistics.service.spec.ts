// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { StatisticsService } from './statistics.service'

describe('StatisticsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: StatisticsService = TestBed.get(StatisticsService)
		expect(service).toBeTruthy()
	})
})
