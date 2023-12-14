
jiangyu('AQI', 'dataAQI','#2a8108');
function jiangyu(data222, data333) {
    d3.csv("../json/jiangyu2.csv", function (d) {
        d.日期 = new Date(d.日期);
        d.日期 = d.日期.getFullYear() + '/' + (d.日期.getMonth() + 1) + '/' + d.日期.getDate();
        return d;
    }, function (error, data) {
        if (error) {
            console.log(error);
            return;
        }
        let data1, data2, dataAQI, dataPM25, dataPM10, dataCO, dataNO2, dataSO2, dataO3;
        data1 = data.map(obj => obj.日期);
        data2 = data.map(obj => obj.累加降水量);
        dataAQI = data.map(obj => obj.AQI);
        dataPM25 = data.map(obj => obj.PM25);
        dataCO = data.map(obj => obj.O3);
        dataNO2 = data.map(obj => obj.CO);
        dataSO2 = data.map(obj => obj.NO2);
        dataO3 = data.map(obj => obj.SO2);
        dataPM10 = data.map(obj => obj.PM10);
        let linecoler
        if (data222 == 'AQI') {
            data333 = dataAQI;
            linecoler = '#2a8108'
        } else if (data222 == "PM2.5") {
            data333 = dataPM25;
            linecoler = '#EEA608FF'
        } else if (data222 == 'PM10') {
            data333 = dataPM10;
            linecoler = '#FF7F32FF'
        } else if (data222 == 'O3') {
            data333 = dataO3;
            linecoler = '#08547AFF'
        } else if (data222 == 'CO') {
            data333 = dataCO;
            linecoler = '#24282AFF'
        } else if (data222 == 'NO2') {
            data333 = dataNO2;
            linecoler = '#9A2D06FF'
        } else if (data222 == 'SO2') {
            data333 = dataSO2;
            linecoler = '#F8EC76FF'
        }

        console.log(data333[0]);
        drawJiangyu(data1, data2,  data222, data333, linecoler);
    });
}
function drawJiangyu(data1, data2, data222, data333, linecoler) {
    var chartDom = document.getElementById('jiangyu');
    var myChart = echarts.init(chartDom);
    var option;
    console.log(echarts)
    option = {
        title: {
            text: '降雨量-' + data222 + '关系图',
            left: 'center'
        },
        grid: {
            bottom: 80
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#505765'
                }
            }
        },
        legend: {
            data: ['data', 'Rainfall'],
            left: 10
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 65,
                end: 85
            }
        ],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: { onZero: false },
                // prettier-ignore
                data: data1.map(function (str) {
                    return str.replace(' ', '\n');
                })
            }
        ],
        yAxis: [
            {
                name: data222,
                type: 'value'
            },
            {
                name: 'Rainfall(mm)',
                nameLocation: 'start',
                alignTicks: true,
                type: 'value',
                inverse: true
            }
        ],
        series: [
            {
                name: data222,
                type: 'line',
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    focus: 'series'
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        opacity: 0.3
                    },
                    data: [
                        [
                            {
                                xAxis: '2020/8/1'
                            },
                            {
                                xAxis: '2022/3/20'
                            }
                        ]
                    ]
                },
                itemStyle: {
                    color: linecoler // 设置为蓝色
                },
                // prettier-ignore

                data: data333
            },
            {
                name: 'Rainfall',
                type: 'line',
                yAxisIndex: 1,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    focus: 'series'
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        opacity: 0.3
                    },
                    data: [
                        [
                            {
                                xAxis: '2020/8/1'
                            },
                            {
                                xAxis: '2022/3/20'
                            }
                        ]
                    ]
                },
                itemStyle: {
                    color: '#1368bb' // 设置为蓝色
                },
                // prettier-ignore
                data: data2
            }
        ]
    };

    option && myChart.setOption(option)
}
// 选择按钮元素
let data222 = ['AQI', 'PM25', 'PM10', 'CO', 'NO2', 'SO2', 'O3']
let data444 = ['AQI 下一个:PM25', 'PM25 下一个:PM10', 'PM10 下一个:CO', 'CO 下一个:NO2', 'NO2 下一个:SO2', 'SO2 下一个:O3', 'O3 下一个:AQI']
let data333 = ['dataAQI', 'dataPM25', 'dataPM10', 'dataCO', 'dataNO2', 'dataSO2', 'dataO3']
let count = 0


