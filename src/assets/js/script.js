$(document).ready(function () {
	var dataFiles = [
		'vis_1_klub_typ_zakona_hlasovanie',
		'vis_2_klub_zakon_rozprava',
		'vis_3_klub_poslanec_cas'
	];
	var data = {};
	dataFiles.forEach(function (dataFile) {
		$.ajax({
			url: 'assets/data/' + dataFile + '.json',
			async: false,
			dataType: 'json',
			success: function (response) {
				data[dataFile] = response
			}
		});
	});

	var echartElements = {
		'vis-1-a': echarts.init(document.getElementById('vis-1-a')),
		'vis-1-b': echarts.init(document.getElementById('vis-1-b')),
		'vis-2': echarts.init(document.getElementById('vis-2')),
		'vis-3-a': echarts.init(document.getElementById('vis-3-a')),
		'vis-3-b': echarts.init(document.getElementById('vis-3-b')),
  };

	var selectElements = {
		'sel-vis-1': $('#sel-vis-1 > select'),
		'sel-vis-3': $('#sel-vis-3 > select'),
	};

	Object.keys(data['vis_1_klub_typ_zakona_hlasovanie']).forEach(function (klub) {
		selectElements['sel-vis-1'].append($('<option>', {
			value: klub,
			text: klub
		}));
  });
	Object.keys(data['vis_3_klub_poslanec_cas']).forEach(function (klub) {
		selectElements['sel-vis-3'].append($('<option>', {
			value: klub,
			text: klub
		}));
  });

	var visualizationUpdates = [
		function updateVisualization1 () {
			echartElements['vis-1-a'].setOption(visualizationUpdate1A(
				data['vis_1_klub_typ_zakona_hlasovanie'],
				selectElements['sel-vis-1'].val()
			));
			echartElements['vis-1-b'].setOption(visualizationUpdate1B(
				data['vis_1_klub_typ_zakona_hlasovanie'],
				selectElements['sel-vis-1'].val()
			));
		},
		function updateVisualization2 () {
      echartElements['vis-2'].setOption(visualizationUpdate2(data['vis_2_klub_zakon_rozprava']));
      echartElements['vis-2'].on('click', visualizationClickHandler2);
    },
		function updateVisualization3 () {
			echartElements['vis-3-a'].setOption(visualizationUpdate3A(
				data['vis_3_klub_poslanec_cas'],
				selectElements['sel-vis-3'].val()
			));
			echartElements['vis-3-b'].setOption(visualizationUpdate3B(
        data['vis_3_klub_poslanec_cas'],
        selectElements['sel-vis-3'].val()
      ));
    }
	];

	visualizationUpdates.forEach(function (visualizationUpdate) {
		visualizationUpdate();
  });

  $(window).on('resize', function () {
    visualizationUpdates.forEach(function (visualizationUpdate) {
      visualizationUpdate()
    });
  });

	selectElements['sel-vis-1'].change(visualizationUpdates[0]);
  selectElements['sel-vis-3'].change(visualizationUpdates[2]);

  echartElements['vis-3-b'].on('click', function (params) {
    selectElements['sel-vis-3'].val(params.data.name)
    selectElements['sel-vis-3'].change()
  });
})
