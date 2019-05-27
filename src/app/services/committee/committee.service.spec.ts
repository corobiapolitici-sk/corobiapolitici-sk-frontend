// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { CommitteeService } from './committee.service'

describe('CommitteeService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: CommitteeService = TestBed.get(CommitteeService)
		expect(service).toBeTruthy()
	})
})
