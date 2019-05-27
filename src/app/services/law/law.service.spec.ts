// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { LawService } from './law.service'

describe('LawService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: LawService = TestBed.get(LawService)
		expect(service).toBeTruthy()
	})
})
