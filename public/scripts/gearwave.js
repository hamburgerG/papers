var height = 100;
var centerh = view.center.y
var amount = 10;
var path = new Path();
path.fillColor = 'black';
path.strokeColor = 'black';
path.strokeWidth = 60;
path.dashArray = [30, 30]

for (var i = 0; i <= amount; i++) {
    point = new Point(i / amount, 1) * view.size
    path.add(point);
}
path.add(new Point(view.bounds.right + 100, centerh));
path.add(new Point(view.bounds.bottomRight + 50));
path.add(new Point(view.bounds.left - 50, view.bounds.bottom + 50));
path.add(new Point(view.bounds.left - 50, centerh));
path.fullySelected = true;

function onFrame(event) {
    for (var i = 0; i <= amount; i++) {
        var segment = path.segments[i];
        var sinus = Math.sin(event.time + i);
        segment.point.y = sinus * height + centerh;
    }
    // path.closed = true;
    path.smooth();
}