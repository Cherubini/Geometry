const point1 = new Point(1,1);
const point2 = new Point(1, 3);

const point3 = new Point(1, 3);
const point4 = new Point(3, 1);

const point5 = new Point(3, 1);
const point6 = new Point(1, 1);
console.log(point1);
console.log(point2);

const segment1 = new Segment(point1, point2);
const segment2 = new Segment(point3, point4);
const segment3 = new Segment(point5, point6);

const segment4= Segment.fromPointsCoordinates(1,1,4,5);
console.log(segment4);

console.log(segment4.calculateLength);
console.log('test triangoli');
const triangle1 = Triangle.fromCoordinatesToTriangle(1,1,1,3,3,1);

console.log(triangle1);
console.log(segment1._calculateLength);
console.log(segment2._calculateLength);
console.log(segment3._calculateLength);

console.log(triangle1.calculateArea());