// Load angular modules.
import {
	Component,
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
	/preprocessed/data/statistics/
	resourceFileName: string = 'klub_poslanec_cas.json'

	selectClubOptions: string[] = []

	chartAOptions: EChartOption = {}

	chartBOptions: EChartOption = {}

	constructor(
		private statisticsService: StatisticsService,
	) {}

	ngOnInit(): void {
		this.statisticsService.get(resourceFileName).subscribe((data) => {
			// TODO
		})
	}

	selectClub(
		clubName: string,
	): void {

	}

	visualizationUpdate3A(
		data,
		selection
	) {
		var item = data[selection]

		return {
			color: '#00a9a6',
			title: {
				text: 'poslanecký klub: ' + selection,
				x: 'center',
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
				formatter: '{b} : {c} minút',
			},
			xAxis: {
				name: 'Poslanci klubu ' + selection,
				nameLocation: 'center',
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold',
				},
				data: Object.keys(item).reverse().map(() => {
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
				name: 'poslanecký klub: ' + selection,
				type: 'bar',
				data: Object.keys(item).reverse().map((key) => {
					return {
						value: item[key],
						name: key,
					}
				}),
			}],
		}
	}
	visualizationUpdate3B(
		data,
		selection
	) {
		var item = {};
		Object.keys(data).forEach(function (key) {
			item[key] = Object.keys(data[key]).reduce(function (acc, name) {
				return acc + data[key][name]
			}, 0)
		});

		return {
			color: '#00a9a6',
			title: {
				text: 'všetky poslanecké kluby',
				x: 'center',
				textStyle: {
					color: 'white',
					fontFamily: 'QuarcaRegular',
					fontSize: 20
				}
			},
			grid: {
				right: '0%',
				left: '18%'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} minút"
			},
			xAxis: {
				name: 'Poslanecké kluby',
				nameLocation: 'center',
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold'
				},
				data: Object.keys(item).map(function () {
					return ''
				}),
				axisLine: {
					lineStyle: {
						color: 'white'
					}
				}
			},
			yAxis: {
				name: 'Celkový počet minút',
				nameLocation: 'center',
				nameGap: 45,
				nameTextStyle: {
					fontFamily: 'QuarcaRegular',
					fontSize: 16,
					fontWeight: 'bold'
				},
				axisLine: {
					lineStyle: {
						color: 'white'
					}
				}
			},
			series: [{
				name: 'všetky poslanecké kluby',
				type: 'bar',
				data: Object.keys(item).map(function (key) {
					var result = {
						value: item[key],
						name: key
					};

					if (selection === key) {
						result.itemStyle = {
							color: 'white'
						};
					}

					return result;
				})
			}]
		};
	}
}
