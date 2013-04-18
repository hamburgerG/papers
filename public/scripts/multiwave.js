var width = view.bounds.width;
var height = view.bounds.height;
var hCenter = width / 2;
var waveHeight = 100;
var points = 10;
var waves = 10;

var path = new Path();
path.style = {
    strokeColor: 'black',
    strokeWidth: 5,
    dashArray: [10, 4]
};

for (var i = 0; i <= points; i++) {
    point = new Point((i / points) * width, 0);
    path.add(point);
}

var symbol = new Symbol(path);
for (var i = 0; i <= waves; i++) {
    point = new Point(hCenter, (i / waves) * height);
    wave = symbol.place(point);
}

function onFrame(event) {
    for (var i = 0; i <= points; i++) {
        var segment = symbol.definition.segments[i];
        var sinus = Math.sin(event.count / 100 + i);
        segment.point.y = sinus * waveHeight;
    }
    symbol.definition.smooth();
}