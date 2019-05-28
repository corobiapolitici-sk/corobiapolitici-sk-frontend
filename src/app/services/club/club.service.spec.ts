// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { ClubService } from './club.service'

describe('ClubService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: ClubService = TestBed.get(ClubService)
		expect(service).toBeTruthy()
	})
})
