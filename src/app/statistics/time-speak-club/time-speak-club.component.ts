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

@Component({
	selector: 'app-time-speak-club-statistic',
	templateUrl: './time-speak-club.component.html',
	styleUrls: ['./time-speak-club.component.scss'],
})
export class TimeSpeakClubStatisticComponent implements OnInit {
	resourceFileName = 'klub_poslanec_cas.json'

	data: object
	selectClubOptions: {
		name: string,
		value: string,
		selected: boolean,
	}[] = []
	selectedClub: string

	chartAOptions: EChartOption = {}
	chartBOptions: EChartOption = {}

	constructor(
		public statisticsService: StatisticsService,
	) {}

	ngOnInit(): void {
		this.statisticsService.get(this.resourceFileName).subscribe((data) => {
			this.data = data
			this.selectClubOptions = Object.keys(data).map((club) => {
				return {
					name: club,
					value: club,
					selected: false,
				}
			})
			this.selectClubOptions[0].selected = true
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

	chartBClick(
		$event: any,
	): void {
		this.selectedClub = $event.data.name
		for (const selectedClubOption of this.selectClubOptions) {
			selectedClubOption.selected = selectedClubOption.name === this.selectedClub
		}
		this.updateChartOptions()
	}

	updateChartOptions(): void {
		const itemA = this.data[this.selectedClub]

		this.chartAOptions = {
			color: ['#00a9a6'],
			title: {
				text: 'poslanecký klub: ' + this.selectedClub,
				textStyle: {
					color: 'white',
					fontFamily: 'QuarcaRegular',
					fontSize: 20,
				},
			},
			grid: {
				right: '0%',
				left: '18%',
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b}: <b>{c}</b> minút',
			},
			xAxis: {
				name: 'Poslanci klubu ' + this.selectedClub,
				nameLocation: 'center',
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				data: Object.keys(itemA).reverse().map(() => {
					return ''
				}),
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
			},
			yAxis: {
				name: 'Celkový počet minút',
				nameLocation: 'center',
				nameGap: 45,
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
			},
			series: [{
				name: 'poslanecký klub: ' + this.selectedClub,
				type: 'bar',
				data: Object.keys(itemA).reverse().map((key) => {
					return {
						value: itemA[key],
						name: key,
					}
				}),
			}],
		}
		this.chartAOptions.title['x'] = 'center'

		const itemB = {}
		Object.keys(this.data).forEach((key) => {
			itemB[key] = Object.keys(this.data[key]).reduce((acc, name) => {
				return acc + this.data[key][name]
			}, 0)
		})

		this.chartBOptions = {
			color: ['#00a9a6'],
			title: {
				text: 'všetky poslanecké kluby',
				textStyle: {
					color: 'white',
					fontFamily: 'QuarcaRegular',
					fontSize: 20,
				},
			},
			grid: {
				right: '0%',
				left: '18%',
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b}: <b>{c}</b> minút',
			},
			xAxis: {
				name: 'Poslanecké kluby',
				nameLocation: 'center',
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				data: Object.keys(itemB).map(() => {
					return ''
				}),
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
			},
			yAxis: {
				name: 'Celkový počet minút',
				nameLocation: 'center',
				nameGap: 45,
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
			},
			series: [{
				name: 'všetky poslanecké kluby',
				type: 'bar',
				data: Object.keys(itemB).map((key) => {
					const result = {
						value: itemB[key],
						name: key,
						itemStyle: {
							color: 'white',
						},
					}

					if (this.selectedClub !== key) {
						delete result.itemStyle
					}

					return result
				}),
			}],
		}
		this.chartBOptions.title['x'] = 'center'
	}
}
