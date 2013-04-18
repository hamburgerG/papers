tool.minDistance = 10;
tool.maxDistance = 20;

var path;

function onMouseDown(event) {
    path = new Path();
    path.fillColor = new HsbColor(Math.random() * 360, 1, 1);
    path.opacity = 0.5;
    path.add(event.point);
    path.blendMode = 'difference'
}

function onMouseDrag(event) {
    var step = event.delta / 2;
    step.angle += 90;
    
    var top = event.middlePoint + step;
    var bottom = event.middlePoint - step;

    path.add(top);
    path.insert(0, bottom);
}

function onMouseUp(event) {
    path.add(event.point);
    path.closed = true;
    path.simplify(30);
}