function visualizationUpdate1A (data, selection) {
	var item = data[selection]['koalícia']

	return {
		title : {
			text: 'koaličné zákony',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series : [{
			name: 'koaličné zákony',
			type: 'pie',
			radius : '55%',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key
				}
			})
		}]
	}
}

function visualizationUpdate1B (data, selection) {
	var item = data[selection]['opozícia']

	return {
		title : {
			text: 'opozičné zákony',
			x:'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series : [{
			name: 'opozičné zákony',
			type: 'pie',
			radius : '55%',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key
				}
			})
		}]
	}
}
