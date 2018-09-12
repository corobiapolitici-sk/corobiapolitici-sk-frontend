function visualizationUpdate3A (data, selection) {
	var item = data[selection]

	return {
    color: '#00a9a6',
		title: {
			text: 'poslanecký klub: ' + selection,
			x: 'center',
      textStyle: {
        color: 'white',
        fontFamily: 'QuarcaRegular',
        fontSize: 20
      }
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} minút"
		},
		xAxis: {
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
      axisLine: {
        lineStyle: {
          color: 'white'
        }
      }
    },
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

function visualizationUpdate3B (data, selection) {
	var item = {}
	Object.keys(data).forEach((key) => {
		item[key] = Object.keys(data[key]).reduce((acc, name) => {
			return acc + data[key][name]
		}, 0)
	})

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
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} minút"
		},
		xAxis: {
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
        }

        if (selection === key) {
          result.itemStyle = {
            color: 'white'
          }
        }

        return result
			})
		}]
	}
}
