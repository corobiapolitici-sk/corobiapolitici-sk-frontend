function visualizationUpdate3A (data, selection) {
	var item = data[selection];

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
    grid: {
      right: '0%',
      left: '18%'
    },
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} minút"
		},
		xAxis: {
      name: 'Poslanci klubu ' + selection,
      nameLocation: 'center',
      nameTextStyle: {
        fontFamily: 'QuarcaRegular',
        fontSize: 16,
        fontWeight: 'bold'
      },
			data: Object.keys(item).reverse().map(function () {
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
			name: 'poslanecký klub: ' + selection,
      type: 'bar',
			data: Object.keys(item).reverse().map(function (key) {
				return {
					value: item[key],
					name: key
				}
			})
		}]
	};
}

function visualizationUpdate3B (data, selection) {
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
