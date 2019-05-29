// Load angular modules.
import {
	Component,
	HostListener,
	OnInit,
} from '@angular/core'

// Load npm modules.
import { EChartOption } from 'echarts'

// Load local modules.
import { StatisticsService } from '../../services/statistics/statistics.service'

const visualization1Colors = {
	'Nehlasoval/a': '#66b0ff',
	'Neprítomný/á': '#a78bda',
	Proti: '#ff6a4d',
	Za: '#5bd778',
	'Zdržal/a sa': '#ffd24d',
}

@Component({
	selector: 'app-vote-club-law-statistic',
	templateUrl: './vote-club-law.component.html',
	styleUrls: ['./vote-club-law.component.scss'],
})
export class VoteClubLawStatisticComponent implements OnInit {
	resourceFileName = 'klub_typ_zakona_hlasovanie.json'

	data: object
	selectClubOptions: {
		name: string,
		value: string,
	}[] = []
	selectedClub: string

	chartAOptions: EChartOption = {}
	chartBOptions: EChartOption = {}

	constructor(
		private statisticsService: StatisticsService,
	) {}

	ngOnInit(): void {
		this.statisticsService.get(this.resourceFileName).subscribe((data) => {
			this.data = data
			this.selectClubOptions = Object.keys(data).map((club) => {
				return {
					name: club,
					value: club,
				}
			})
			this.selectedClub = this.selectClubOptions[0].value

			this.updateChartOptions()
		})
	}

	@HostListener('window:resize', ['$event'])
	onResize(): void {
		this.updateChartOptions()
	}

	selectClub(
		value: string,
	): void {
		this.selectedClub = value
		this.updateChartOptions()
	}

	updateChartOptions(): void {
		const itemA = this.data[this.selectedClub]['koalícia']

		this.chartAOptions = {
			title: {
				text: 'koaličné zákony',
				textStyle: {
					color: 'white',
					fontFamily: 'QuarcaRegular',
					fontSize: 18,
				},
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b}: <b>{c}</b> ({d}%)',
			},
			series: [{
				name: 'koaličné zákony',
				type: 'pie',
				radius: '65%',
				data: Object.keys(itemA).map((key) => {
					return {
						value: itemA[key],
						name: key,
						label: {
							fontFamily: 'QuarcaRegular',
							fontSize: 13,
						},
						itemStyle: {
							color: visualization1Colors[key],
						},
					}
				}),
			}],
		}
		this.chartAOptions.title['x'] = 'center'

		const itemB = this.data[this.selectedClub]['opozícia']

		this.chartBOptions = {
			title: {
				text: 'opozičné zákony',
				textStyle: {
					color: 'white',
					fontFamily: 'QuarcaRegular',
					fontSize: 18
				}
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b}: <b>{c}</b> ({d}%)'
			},
			series: [{
				name: 'opozičné zákony',
				type: 'pie',
				radius: '65%',
				data: Object.keys(itemB).map((key) => {
					return {
						value: itemB[key],
						name: key,
						label: {
							fontFamily: 'QuarcaRegular',
							fontSize: 13,
						},
						itemStyle: {
							color: visualization1Colors[key],
						},
					}
				})
			}]
		}
		this.chartBOptions.title['x'] = 'center'
	}
}
