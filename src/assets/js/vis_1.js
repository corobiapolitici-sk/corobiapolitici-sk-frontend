var visualization1Colors = {
	"Nehlasoval/a":'#66b0ff',
	"Neprítomný/á":'#a78bda',
	"Proti":'#ff6a4d',
	"Za": '#5bd778',
	"Zdržal/a sa":'#ffd24d'
};

function visualizationUpdate1A (data, selection) {
	var item = data[selection]['koalícia'];

	return {
		title : {
			text: 'koaličné zákony',
			x: 'center',
			textStyle: {
				color: 'white',
				fontFamily: 'QuarcaRegular',
				fontSize: 18
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		series : [{
			name: 'koaličné zákony',
			type: 'pie',
			radius : '65%',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key,
					label: {
						fontFamily: 'QuarcaRegular',
						fontSize: 13
					},
					itemStyle: {
						color: visualization1Colors[key]
					}
				};
			})
		}]
	};
}

function visualizationUpdate1B (data, selection) {
	var item = data[selection]['opozícia']

	return {
		title : {
			text: 'opozičné zákony',
			x:'center',
			textStyle: {
				color: 'white',
				fontFamily: 'QuarcaRegular',
				fontSize: 18
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		series : [{
			name: 'opozičné zákony',
			type: 'pie',
			radius : '65%',
			data: Object.keys(item).map(function (key) {
				return {
					value: item[key],
					name: key,
					label: {
						fontFamily: 'QuarcaRegular',
						fontSize: 13
					},
					itemStyle: {
						color: visualization1Colors[key]
					}
				}
			})
		}]
	}
}
