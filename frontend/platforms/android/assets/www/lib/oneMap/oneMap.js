var map, toolbar, symbol, geomTask;
var centerPoint = "28968.103,33560.969";
var levelNumber = 7;
var OneMap = new GetOneMap('divMain', 'SM', {level: levelNumber, center: centerPoint});
var pointsSelected = [];

function getLatLongfromXY(xy) {
    // 3414 is SVY21 format, 4326 is WGS84 format
    return new CoordConvertor().ConvertCoordinate(xy.join(','), 3414, 4326, function(result){
        pointsSelected.push(result);
    })
}

//OneMap.Ready(init);
function initToolbar() {
    map = OneMap.map;
    require(["dojo/parser", "dijit/registry",
        "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
        "dijit/form/Button", "dijit/WidgetSet", "dojo/domReady!"], function (parser, registry) {
        parser.parse();
        createToolbar(map);
        activateTool();

        // Not sure why when inside ion-content, activateTool not triggered when button for drawing tool is clicked.
        function activateTool() {
            toolbar.activate(OneMap.Draw["MULTI_POINT"]);
        }

        function createToolbar(map) {
            toolbar = new OneMap.Draw(map);
            toolbar.on("draw-end", addToMap);
            //dojo.connect(toolbar, "onDrawEnd", addToMap);
        }

        function addToMap(evt) {
            if (evt.geometry.points.length < 2) {
                alert('Must select more than 1 point');
                return;
            }

            for (var i = 0; i < 2; i++) {
                getLatLongfromXY(evt.geometry.points[i]);
            }

            switch (evt.geometry.type) {
                case "point":
                    var symbol = new OneMap.SimpleMarkerSymbol(OneMap.SimpleMarkerSymbol.STYLE_SQUARE, 10, new OneMap.SimpleLineSymbol(OneMap.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 1), new dojo.Color([0, 255, 0, 0.25]));
                    break;
                case "polyline":
                    var symbol = new OneMap.SimpleLineSymbol(OneMap.SimpleLineSymbol.STYLE_DASH, new dojo.Color([255, 0, 0]), 1);
                    break;
                case "polygon":
                    var symbol = new OneMap.SimpleFillSymbol(OneMap.SimpleFillSymbol.STYLE_NONE, new OneMap.SimpleLineSymbol(OneMap.SimpleLineSymbol.STYLE_DASHDOT, new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));
                    break;
                case "extent":
                    var symbol = new OneMap.SimpleFillSymbol(OneMap.SimpleFillSymbol.STYLE_NONE, new OneMap.SimpleLineSymbol(OneMap.SimpleLineSymbol.STYLE_DASHDOT, new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));
                    break;
                case "multipoint":
                    var symbol = new OneMap.SimpleMarkerSymbol(OneMap.SimpleMarkerSymbol.STYLE_DIAMOND, 20, new OneMap.SimpleLineSymbol(OneMap.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0, 0, 0]), 1), new dojo.Color([255, 255, 0, 0.5]));
                    break;
            }
            var graphic = new OneMap.Graphic(evt.geometry, symbol);
            map.graphics.add(graphic);
        }

    }); //End Required
} //End function
dojo.addOnLoad(initToolbar);