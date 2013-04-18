var center, 
    up, down, frontLeft, frontRight, backLeft, backRight,
    active;
var cube = new Group;
var text = new PointText(new Point(30, 30));
text.fillColor = 'black';
text.content = 'Q W E';
var text2 = new PointText(new Point (30, 50));
text2.fillColor = 'black';
text2.content = 'A S D';

initializeCube();

function initializeCube() {
    center = view.center;
    var rad = new Point(50, 0);
    var base = center + rad;
    var bR = base.rotate(30, center);
    var bB = bR.rotate(60, center);
    var bL = bB.rotate(60, center);
    var tL = bL.rotate(60, center);
    var tT = tL.rotate(60, center);
    var tR = tT.rotate(60, center);

    var faceLeft = new Path([center, bB, bL, tL]);
    var faceTop = new Path([center, tL, tT, tR]);
    var faceRight = new Path([center, tR, bR, bB]);
    
    faceLeft.fillColor = 'red';
    faceTop.fillColor = 'yellow';
    faceRight.fillColor = 'blue';

    cube.children = [faceLeft, faceTop, faceRight];
    active = cube;

    up = tT - center;
    down = bB - center;
    frontLeft = bL - center;
    frontRight = bR - center;
    backLeft = tL - center;
    backRight = tR - center;
}

function addBack(current, direction) {
    c = current.clone();
    c.position += direction;
    c.insertBelow(current);
    active = c;
}

function addFront(current, direction) {
    c = current.clone();
    c.position += direction;
    active = c;
}

function onKeyDown(event) {
    switch(event.key)
    {
    case 'q':
        addBack(active, backLeft);
        break;
    case 'w':
        addFront(active, up);
        break;
    case 'e':
        addBack(active, backRight);
        break;
    case 'a':
        addFront(active, frontLeft);
        break;
    case 's':
        addBack(active, down);
        break;
    case 'd':
        addFront(active, frontRight);
        break;
    default:
        break;
    }

}