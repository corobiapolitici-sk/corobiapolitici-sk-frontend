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
	selector: 'app-top-time-speak-club-law-statistic',
	templateUrl: './top-time-speak-club-law.component.html',
	styleUrls: ['./top-time-speak-club-law.component.scss'],
})
export class TopTimeSpeakClubLawStatisticComponent implements OnInit {
	resourceFileName = 'klub_zakon_rozprava.json'

	data: object

	chartOptions: EChartOption = {}

	constructor(
		public statisticsService: StatisticsService,
	) {}

	ngOnInit(): void {
		this.statisticsService.get(this.resourceFileName).subscribe((data) => {
			this.data = data

			this.updateChartOptions()
		})
	}

	@HostListener('window:resize', ['$event'])
	onResize(): void {
		this.updateChartOptions()
	}

	chartClick(
		$event: any,
	): void {
		if ($event.data.value[1 + 1] !== '-') {
			const urlBase = 'https://www.nrsr.sk/web/Default.aspx?sid=zakony%2Fzakon&ZakZborID=13&CisObdobia=7&CPT='
			window.open(urlBase + Object.keys(this.data['zákony'])[$event.data.value[0]], '_blank')
		}
	}

	updateChartOptions(): void {
		const clubNames = Object.keys(this.data['časy'])
		const lawIds = Object.keys(this.data['zákony'])

		const items = clubNames.reduce((acc, clubName, clubNameIndex) => {
			lawIds.forEach((lawName, lawNameIndex) => {
				acc.push({
					label: {
						fontFamily: 'QuarcaRegular',
						fontSize: 14
					},
					value: [lawNameIndex, clubNameIndex, this.data['časy'][clubName][lawName] || '-'],
				})
			})
			return acc
		}, [])

		this.chartOptions = {
			animation: false,
			tooltip: {
				position: 'top',
				formatter: (params: any) => {
					const lawId = lawIds[params.data.value[0]]
					const clubName = clubNames[params.data.value[1]]
					return 'Klub <b>' + clubName + '</b>'
						+ ' strávil celkovo <b>' + params.data.value[1 + 1] + '</b>'
						+ ' minút v rozpravách o parlamentnej tlači č. <b>' + lawId + '</b></br>'
						+ '<i>' + this.data['zákony'][lawId] + '</i>'
				},
			},
			xAxis: {
				name: 'Číslo parlamentnej tlače',
				nameLocation: 'center',
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				nameGap: 30,
				data: lawIds,
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
				axisLabel: {
					fontFamily: 'QuarcaRegular',
					fontSize: 13,
				},
			},
			yAxis: {
				data: clubNames,
				axisLine: {
					lineStyle: {
						color: 'white',
					},
				},
				axisLabel: {
					fontFamily: 'QuarcaRegular',
					fontSize: 13
				}
			},
			series: [{
				type: 'heatmap',
				data: items,
				label: {
					normal: {
						show: true,
					},
				},
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
			}],
		}
		;
		(this.chartOptions as any)['visualMap'] = {
			min: 10,
			max: 200,
			calculable: true,
			orient: 'horizontal',
			left: 'center',
			bottom: '-15%'
		}
	}
}
