function visualizationUpdate3A (data, selection) {
	var item = data[selection]

	return {
		title: {
			text: 'poslanecký klub: ' + selection,
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} minút"
		},
		xAxis: {
			data: Object.keys(item)
		},
		yAxis: {},
		series: [{
			name: 'poslanecký klub: ' + selection,
			type: 'bar',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key
				}
			})
		}]
	}
}

function visualizationUpdate3B (data) {
	var item = {}
	Object.keys(data).forEach((key) => {
		item[key] = Object.keys(data[key]).reduce((acc, name) => {
			return acc + data[key][name]
		}, 0)
	})

	return {
		title: {
			text: 'všetky poslanecké kluby',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} minút"
		},
		xAxis: {
			data: Object.keys(item)
		},
		yAxis: {},
		series: [{
			name: 'všetky poslanecké kluby',
			type: 'bar',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key
				}
			})
		}]
	}
}
