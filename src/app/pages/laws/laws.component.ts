// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load local modules.
import { Committee } from '../../definitions/committee'
import { Law } from '../../definitions/law'
import { CommitteeService } from '../../services/committee/committee.service'
import { LawService } from '../../services/law/law.service'

@Component({
	selector: 'app-laws',
	templateUrl: './laws.component.html',
	styleUrls: ['./laws.component.scss'],
})
export class LawsComponent implements OnInit {
	committees: Committee[]
	laws: Law[]

	constructor(
		private committeeService: CommitteeService,
		private lawService: LawService,
	) {}

	ngOnInit() {
		this.getCommittees()
		this.getLaws()
	}

	getCommittees(): void {
		this.committeeService.getAll().subscribe((committees) => {
			this.committees = committees
		})
	}

	getLaws(): void {
		this.lawService.getAll().subscribe((laws) => {
			this.laws = laws
		})
	}
}
