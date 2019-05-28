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
import { advancedFind } from '../../utils'

@Component({
	selector: 'app-laws',
	templateUrl: './laws.component.html',
	styleUrls: ['./laws.component.scss'],
})
export class LawsComponent implements OnInit {
	committees: Committee[]
	laws: Law[]

	showCommittee = false
	pageSize = 10
	pageCount: number
	pageNumbers: number[] = []

	searchTerm = ''
	selectedCommitteeNames: string[] = []
	filteredLaws: Law[] = []

	selectedPageNumber = 0
	pageLaws: Law[] = []

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

			this.filterLaws()
		})
	}

	toggleShowCommittee(): void {
		this.showCommittee = !this.showCommittee
	}

	search(
		term: string,
	): void {
		this.searchTerm = term
		this.selectedPageNumber = 0
		this.filterLaws()
	}

	addCommittee(
		name: string,
	): void {
		this.selectedCommitteeNames.push(name)
		this.selectedPageNumber = 0
		this.filterLaws()
	}

	removeCommittee(
		name: string,
	): void {
		this.selectedCommitteeNames = this.selectedCommitteeNames.filter((selectedCommitteeName) => {
			return selectedCommitteeName !== name
		})
		this.selectedPageNumber = 0
		this.filterLaws()
	}

	selectPage(
		pageNumber: number,
	): void {
		this.selectedPageNumber = Math.min(Math.max(pageNumber, 0), this.pageCount - 1)
		this.getPageLaws()
	}

	filterLaws(): void {
		this.filteredLaws = this.laws.filter((law) => {
			if (this.searchTerm !== '') {
				if (!advancedFind(this.searchTerm, [
					law.druh,
					law.nazov,
					law.stav,
					law.url,
					law.vysledok,
					law.gestorskyVyborName,
					law.navrhnutyVyboromName,
					// TODO: poslanci
				])
				) {
					return false
				}
			}

			if (this.selectedCommitteeNames.length > 0) {
				if (
					(this.selectedCommitteeNames.indexOf(law.gestorskyVyborName) === -1)
					&& (this.selectedCommitteeNames.indexOf(law.navrhnutyVyboromName) === -1)
				) {
					return false
				}
			}

			return true
		})
		this.pageCount = Math.ceil(this.filteredLaws.length / this.pageSize)
		this.pageNumbers = []
		for (let pageNumber = 0; pageNumber < this.pageCount; ++pageNumber) {
			this.pageNumbers.push(pageNumber)
		}

		this.getPageLaws()
	}

	getPageLaws(): void {
		const firstLawIndex = this.selectedPageNumber * this.pageSize
		this.pageLaws = this.filteredLaws.slice(firstLawIndex, firstLawIndex + this.pageSize)
	}
}
