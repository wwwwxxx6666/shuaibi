drawmap()
function drawmap(){
    d3.csv("./json/卡口数据3.csv", data => {
        let values = []
        data.forEach(d => {
            let jd = parseFloat(d['jd']);
            let wd = parseFloat(d['wd']);
            let name = d['卡口名称']; // 假设卡口名称字段为'卡口名称'
            let cars = parseFloat(d['车辆类型']);
            let number = parseFloat(d['过车数量']);
            values.push([jd, wd, name,cars,number]);
        })
        let Ebmap = echarts.init(document.getElementById('echarts_bmap'))
        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return '经度： ' + params.value[0] +
                        '<br>纬度: ' + params.value[1]+
                        '<br>总过车数量：'+ params.value[4];
                }
            },
            bmap: {
                center: [116.08, 36.41],
                zoom: 14,
                roam: true,
                mapStyle: {
                    styleJson:[{
                        "featureType": "background",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "land",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#f4f4f9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#e9e8eaff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dad6d1ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#2f4550ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "continent",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "village",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "district",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "districtlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff"
                        }
                    }, {
                        "featureType": "districtlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "poilabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#2f4550ff"
                        }
                    }, {
                        "featureType": "poilabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "poilabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#2f4550ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#2f4550ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "airportlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "airportlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "green",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#586f7cff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "district",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "continent",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "village",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "railway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "provincialwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "provincialwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "tertiarywaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "tertiarywaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#f5f5faff"
                        }
                    }, {
                        "featureType": "shopping",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#000000ff"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 28
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b8dbd9ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#9ab8b1ff",
                            "visibility": "on",
                            "weight": 1.5
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,10",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "arterial",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "9,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "9,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "9,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#000000ff",
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "scenicspots",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#586f7cff",
                            "visibility": "on"
                        }
                    }]
                }
            },
            series: [{
                type: 'scatter',
                coordinateSystem: 'bmap',
                symbolSize: 15,
                data: values,
                itemStyle: {
                    color: 'rgb(60,147,49)',
                }
            },],
            events: {
                click: function(params) {
                    // 在这里编写点击事件的处理逻辑
                    console.log('点击了地图上的点', params);
                }
            }
        };
        Ebmap.setOption(option);
        Ebmap.on("click",params=>{
            var title2 = document.getElementById("title2");
            var myParam = params.value[2]+"车流量数据统计"+"<br><br><br>" + "通过分析卡口车辆数据以及污染物数据，看出车辆的通过数量增多的这些日期，co、pm2.5、pm10的数值会明显增加，说明汽车的尾气会严重影响城市空气质量，应呼吁人们低碳出行"
            title2.innerHTML = myParam;
            console.log(params.value[4])
            drawchart(params.value[2])
        })
    });
}