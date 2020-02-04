/*Morris Init*/
$(function() {
	"use strict";
	
    if($('#morris_area_chart').length > 0)
		// Area Chart
		Morris.Area({
			element: 'morris_area_chart',
			data: [{
				period: '2010 Q1',
				iphone: 2666,
				ipad: null,
				itouch: 2647
			}, {
				period: '2010 Q2',
				iphone: 2778,
				ipad: 2294,
				itouch: 2441
			}, {
				period: '2010 Q3',	
				iphone: 4912,
				ipad: 1969,
				itouch: 2501
			}, {
				period: '2010 Q4',
				iphone: 3767,
				ipad: 3597,
				itouch: 5689
			}, {
				period: '2011 Q1',
				iphone: 6810,
				ipad: 1914,
				itouch: 2293
			}, {
				period: '2011 Q2',
				iphone: 5670,
				ipad: 4293,
				itouch: 1881
			}, {
				period: '2011 Q3',
				iphone: 4820,
				ipad: 3795,
				itouch: 1588
			}, {
				period: '2011 Q4',
				iphone: 15073,
				ipad: 5967,
				itouch: 5175
			}, {
				period: '2012 Q1',
				iphone: 10687,
				ipad: 4460,
				itouch: 2028
			}, {
				period: '2012 Q2',
				iphone: 8432,
				ipad: 5713,
				itouch: 1791
			}],
			xkey: 'period',
			ykeys: ['iphone', 'ipad', 'itouch'],
			labels: ['iPhone', 'iPad', 'iPod Touch'],
			pointSize: 0,
			lineWidth:0,
			fillOpacity: 1,
			pointStrokeColors:['#8BC34A', '#2196F3', '#f8b32d'],
			behaveLikeLine: true,
			grid: false,
			hideHover: 'auto',
			lineColors: ['#8BC34A', '#2196F3', '#f8b32d'],
			resize: true,
			redraw: true,
			smooth: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
		});



    if($('#morris_donut_chart').length > 0) {
		// Donut Chart
		Morris.Donut({
			element: 'morris_donut_chart',
			data: [{
				label: "Personal",
				value: 1865
			}, {
				label: "Work",
				value: 6032
			}],
			colors: ['#2196F3', '#8BC34A'],
			resize: true,
			labelColor: '#878787',
		});
		$("div svg text").attr("style","font-family: Roboto").attr("font-weight","400");
	}





    if($('#morris_portfolio_donut_chart').length > 0) {
		// Donut Chart
		var browsersChart = Morris.Donut({
			element: 'morris_portfolio_donut_chart',
			data: [{
				label: "IAGG",
				value: 22
			}, {
				label: "IMTB",
				value: 5
			}, {
				label: "ISTB",
				value: 33
			}, {
				label: "IEFA",
				value: 12
			}, {
				label: "IJR",
				value: 3
			}, {
				label: "IVV",
				value: 25
			}],
			colors: ['#8cc63d','#8cc63d','#8cc63d', '#3cbcf2', '#356488', '#356488'],
			resize: true,
			labelColor: '#878787',
		});

		browsersChart.options.data.forEach(function(label, i){
		    var legendItem = $('<span></span>').text(label['label']).prepend('<i>&nbsp;</i>');
		    legendItem.find('i').css('backgroundColor', browsersChart.options.colors[i]);
		    $('#legend').append(legendItem)
		  })
		$("div svg text").attr("style","font-family: Roboto").attr("font-weight","400");
	}

    if($('#morris_line_chart').length > 0)
		// Line Chart
		Morris.Line({
			// ID of the element in which to draw the chart.
			element: 'morris_line_chart',
			// Chart data records -- each entry in this array corresponds to a point on
			// the chart.
			data: [{
				d: '2019-10-01',
				visits: 802
			}, {
				d: '2019-10-02',
				visits: 783
			}, {
				d: '2019-10-03',
				visits: 820
			}, {
				d: '2019-10-04',
				visits: 839
			}, {
				d: '2019-10-05',
				visits: 792
			}, {
				d: '2019-10-06',
				visits: 859
			}, {
				d: '2019-10-07',
				visits: 790
			}, {
				d: '2019-10-08',
				visits: 1680
			}, {
				d: '2019-10-09',
				visits: 1592
			}, {
				d: '2019-10-10',
				visits: 1420
			}, {
				d: '2019-10-11',
				visits: 882
			}, {
				d: '2019-10-12',
				visits: 889
			}, {
				d: '2019-10-13',
				visits: 819
			}, {
				d: '2019-10-14',
				visits: 849
			}, {
				d: '2019-10-15',
				visits: 870
			}, {
				d: '2019-10-16',
				visits: 1063
			}, {
				d: '2019-10-17',
				visits: 1192
			}, {
				d: '2019-10-18',
				visits: 1224
			}, {
				d: '2019-10-19',
				visits: 1329
			}, {
				d: '2019-10-20',
				visits: 1329
			}, {
				d: '2019-10-21',
				visits: 1239
			}, {
				d: '2019-10-22',
				visits: 1190
			}, {
				d: '2019-10-23',
				visits: 1312
			}, {
				d: '2019-10-24',
				visits: 1293
			}, {
				d: '2019-10-25',
				visits: 1283
			}, {
				d: '2019-10-26',
				visits: 1248
			}, {
				d: '2019-10-27',
				visits: 1323
			}, {
				d: '2019-10-28',
				visits: 1390
			}, {
				d: '2019-10-29',
				visits: 1420
			}, {
				d: '2019-10-30',
				visits: 1529
			}, {
				d: '2019-10-31',
				visits: 1892
			}, ],
			// The name of the data record attribute that contains x-visitss.
			xkey: 'd',
			// A list of names of data record attributes that contain y-visitss.
			ykeys: ['visits'],
			// Labels for the ykeys -- will be displayed when you hover over the
			// chart.
			labels: ['Visits'],
			// Disables line smoothing
			pointSize: 1,
			pointStrokeColors:['#8BC34A'],
			behaveLikeLine: true,
			grid:false,
			gridTextColor:'#878787',
			lineWidth: 2,
			smooth: true,
			hideHover: 'auto',
			lineColors: ['#8BC34A'],
			resize: true,
			gridTextFamily:"Roboto"
		});

	if($('#morris_bar_chart').length > 0)
	   // Bar Chart
		Morris.Bar({
			element: 'morris_bar_chart',
			data: [{
				device: 'iPhone',
				geekbench: 136
			}, {
				device: 'iPhone 3G',
				geekbench: 137
			}, {
				device: 'iPhone 3GS',
				geekbench: 275
			}, {
				device: 'iPhone 4',
				geekbench: 380
			}, {
				device: 'iPhone 4S',
				geekbench: 655
			}, {
				device: 'iPhone 5',
				geekbench: 1571
			}],
			xkey: 'device',
			ykeys: ['geekbench'],
			labels: ['Geekbench'],
			barRatio: 0.4,
			xLabelAngle: 35,
			pointSize: 1,
			barOpacity: 1,
			pointStrokeColors:['#8BC34A'],
			behaveLikeLine: true,
			grid: false,
			gridTextColor:'#878787',
			hideHover: 'auto',
			barColors: ['#8BC34A'],
			resize: true,
			gridTextFamily:"Roboto"
		});
	

	
    if($('#morris_extra_bar_chart').length > 0)
		// Area Chart
		Morris.Area({
			element: 'morris_extra_bar_chart',
			data: [{
				period: '2019-01-30',
				personal: 0,
				work: 1430
			},{
				period: '2019-02-10',
				personal: 0,
				work: 1444
			},{
				period: '2019-02-20',
				personal: 0,
				work: 1473
			},{
				period: '2019-02-30',
				personal: 0,
				work: 1983
			},{
				period: '2019-03-10',
				personal: 1000,
				work: 2042
			},{
				period: '2019-03-20',
				personal: 1030,
				work: 2062
			},{
				period: '2019-03-30',
				personal: 1081,
				work: 2124
			},{
				period: '2019-04-10',
				personal: 1103,
				work: 2646
			},{
				period: '2019-04-20',
				personal: 1169,
				work: 2698
			},{
				period: '2019-04-30',
				personal: 2189,
				work: 2725
			},{
				period: '2019-05-10',
				personal: 2254,
				work: 3235
			},{
				period: '2019-05-20',
				personal: 2277,
				work: 3246
			},{
				period: '2019-05-30',
				personal: 2049,
				work: 3261
			},{
				period: '2019-06-10',
				personal: 2172,
				work: 3766
			},{
				period: '2019-06-20',
				personal: 2281,
				work: 3776
			},{
				period: '2019-06-30',
				personal: 1281,
				work: 4281
			},{
				period: '2019-07-10',
				personal: 1409,
				work: 4297
			},{
				period: '2019-07-20',
				personal: 1451,
				work: 4308
			},{
				period: '2019-07-30',
				personal: 1509,
				work: 4313
			},{
				period: '2019-08-10',
				personal: 1525,
				work: 4856
			},{
				period: '2019-08-20',
				personal: 1570,
				work: 4900
			},{
				period: '2019-08-30',
				personal: 1633,
				work: 5410
			},{
				period: '2019-09-10',
				personal: 1649,
				work: 5425
			},{
				period: '2019-09-20',
				personal: 1567,
				work: 5431
			},{
				period: '2019-09-30',
				personal: 1661,
				work: 5951
			},{
				period: '2019-10-10',
				personal: 1711,
				work: 5971
			},{
				period: '2019-10-20',
				personal: 1865,
				work: 6032
			}],
			xkey: 'period',
			ykeys: ['personal', 'work'],
			labels: ['Personal', 'Work'],
			pointSize: 0,
			lineWidth:0,
			fillOpacity: 0.6,
			pointStrokeColors:['#2196F3', '#8BC34A'],
			behaveLikeLine: true,
			grid: false,
			hideHover: 'auto',
			lineColors: ['#2196F3', '#8BC34A'],
			resize: true,
			redraw: true,
			smooth: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
		});



    if($('#morris_work_balance_bar_chart').length > 0)
		// Area Chart
		Morris.Area({
			element: 'morris_work_balance_bar_chart',
			data: [{
				period: '2019-01-30',
				work: 1430
			},{
				period: '2019-02-10',
				work: 1444
			},{
				period: '2019-02-20',
				work: 1473
			},{
				period: '2019-02-30',
				work: 1983
			},{
				period: '2019-03-10',
				work: 2042
			},{
				period: '2019-03-20',
				work: 2062
			},{
				period: '2019-03-30',
				work: 2124
			},{
				period: '2019-04-10',
				work: 2646
			},{
				period: '2019-04-20',
				work: 2698
			},{
				period: '2019-04-30',
				work: 2725
			},{
				period: '2019-05-10',
				work: 3235
			},{
				period: '2019-05-20',
				work: 3246
			},{
				period: '2019-05-30',
				work: 3261
			},{
				period: '2019-06-10',
				work: 3766
			},{
				period: '2019-06-20',
				work: 3776
			},{
				period: '2019-06-30',
				work: 4281
			},{
				period: '2019-07-10',
				work: 4297
			},{
				period: '2019-07-20',
				work: 4308
			},{
				period: '2019-07-30',
				work: 4313
			},{
				period: '2019-08-10',
				work: 4856
			},{
				period: '2019-08-20',
				work: 4900
			},{
				period: '2019-08-30',
				work: 5410
			},{
				period: '2019-09-10',
				work: 5425
			},{
				period: '2019-09-20',
				work: 5431
			},{
				period: '2019-09-30',
				work: 5951
			},{
				period: '2019-10-10',
				work: 5971
			},{
				period: '2019-10-20',
				work: 6032
			}],
			xkey: 'period',
			ykeys: ['work'],
			labels: ['Work'],
			pointSize: 0,
			lineWidth:0,
			fillOpacity: 0.6,
			pointStrokeColors:['#8BC34A'],
			behaveLikeLine: true,
			grid: false,
			hideHover: 'auto',
			lineColors: ['#8BC34A'],
			resize: true,
			redraw: true,
			smooth: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
		});

	
		// Morris bar chart
		// Morris.Bar({
		// 	element: 'morris_work_balance_bar_chart',
		// 	data: [{
		// 		y: 'Feb',
		// 		b: 500
		// 	}, {
		// 		y: 'Mar',
		// 		b: 1010
		// 	}, {
		// 		y: 'Apr',
		// 		b: 1530
		// 	}, {
		// 		y: 'May',
		// 		b: 2050
		// 	}, {
		// 		y: 'Jun',
		// 		b: 2590
		// 	}, {
		// 		y: 'Jul',
		// 		b: 3200
		// 	}, {
		// 		y: 'Aug',
		// 		b: 3900
		// 	}, {
		// 		y: 'Sept',
		// 		b: 4600
		// 	}, {
		// 		y: 'Oct',
		// 		b: 5400
		// 	}, {
		// 		y: 'Nov',
		// 		b: 6300
		// 	}],
		// 	xkey: 'y',
		// 	ykeys: ['b'],
		// 	labels: ['Work'],
		// 	barColors:['#8BC34A'],
		// 	barOpacity:1,
		// 	hideHover: 'auto',
		// 	grid: false,
		// 	resize: true,
		// 	gridTextColor:'#878787',
		// 	gridTextFamily:"Roboto"
		// });

    if($('#morris_personal_balance_bar_chart').length > 0)
		// Area Chart
		Morris.Area({
			element: 'morris_personal_balance_bar_chart',
			data: [{
				period: '2019-01-30',
				personal: 0
			},{
				period: '2019-02-10',
				personal: 0
			},{
				period: '2019-02-20',
				personal: 0
			},{
				period: '2019-02-30',
				personal: 0
			},{
				period: '2019-03-10',
				personal: 1000
			},{
				period: '2019-03-20',
				personal: 1030
			},{
				period: '2019-03-30',
				personal: 1081
			},{
				period: '2019-04-10',
				personal: 1103
			},{
				period: '2019-04-20',
				personal: 1169
			},{
				period: '2019-04-30',
				personal: 2189
			},{
				period: '2019-05-10',
				personal: 2254
			},{
				period: '2019-05-20',
				personal: 2277
			},{
				period: '2019-05-30',
				personal: 2049
			},{
				period: '2019-06-10',
				personal: 2172
			},{
				period: '2019-06-20',
				personal: 2281
			},{
				period: '2019-06-30',
				personal: 1281
			},{
				period: '2019-07-10',
				personal: 1409
			},{
				period: '2019-07-20',
				personal: 1451
			},{
				period: '2019-07-30',
				personal: 1509
			},{
				period: '2019-08-10',
				personal: 1525
			},{
				period: '2019-08-20',
				personal: 1570
			},{
				period: '2019-08-30',
				personal: 1633
			},{
				period: '2019-09-10',
				personal: 1649
			},{
				period: '2019-09-20',
				personal: 1567
			},{
				period: '2019-09-30',
				personal: 1661
			},{
				period: '2019-10-10',
				personal: 1711
			},{
				period: '2019-10-20',
				personal: 1865
			}],
			xkey: 'period',
			ykeys: ['personal'],
			labels: ['Personal'],
			pointSize: 0,
			lineWidth:0,
			fillOpacity: 0.6,
			pointStrokeColors:['#2196F3'],
			behaveLikeLine: true,
			grid: false,
			hideHover: 'auto',
			lineColors: ['#2196F3'],
			resize: true,
			redraw: true,
			smooth: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
		});



});
