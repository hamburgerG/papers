var amount = 10;
var height = 60;

var path = new Path();
path.style = {
    strokeColor: new HsbColor(90, 0.5, 0.5),
    strokeWidth: 60,
    strokeCap: 'square'
};

var path2 = new Path();
path2.style = {
    strokeColor: new HsbColor(180, 0.5, 0.5),
    strokeWidth: 60,
    strokeCap: 'square',
    blendMode: 'difference'
};

for (var i = 0; i <= amount; i++) {
    path.add(new Point(i / amount, 1) * view.size);
    path2.add(new Point(i / amount, 1) * view.size);
}

path.fullySelected = true;
path2.fullySelected = true;

function onFrame(event) {
    for (var i = 0; i <= amount; i++) {
        var segment = path.segments[i];
        var segment2 = path2.segments[i];
        var sinus = Math.sin(event.time + i);
        
        segment.point.y = sinus * height + view.bounds.height / 2;
        segment2.point.y = sinus * height * (-1) + view.bounds.height / 2;

        path.strokeColor.hue += 0.05;
        path2.strokeColor.hue += 0.03;
    }

    path.smooth();
    path2.smooth();
}