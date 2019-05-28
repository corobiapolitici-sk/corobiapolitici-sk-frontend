// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { PoliticianService } from './politician.service'

describe('PoliticianService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: PoliticianService = TestBed.get(PoliticianService)
		expect(service).toBeTruthy()
	})
})
