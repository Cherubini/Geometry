class Triangle{
    constructor(pointA, pointB, pointC)
        {
        this.segment1=new Segment(pointA, pointB);
        this.segment2=new Segment(pointB, pointC);
        this.segment3=new Segment(pointC, pointA);
        }
    
    static fromCoordinatesToTriangle(point1A,point1B,point2A,point2B,point3A,point3B)
        {
        const p1 = new Point(point1A,point1B)
        const p2 = new Point(point2A,point2B)
        const p3 = new Point(point3A,point3B)
        return new Triangle(p1,p2,p3);
        }
    
    get _seg1()
        {
        return this.segment1
        }

    get _seg2()
        {
        return this.segment2
        }

    get _seg3()
        {
        return this.segment3
        }

    
    calculatePerimeter(){
        const s1length=this._seg1._calculateLength
        const s2length=this._seg2._calculateLength
        const s3length=this._seg3._calculateLength
        return s1length+s2length+s3length;
        }

    calculateArea(){
    const perimeter=this.calculatePerimeter();
    const semiPerimeter=perimeter/2;

    const sPMinusS1=semiPerimeter-this._seg1._calculateLength;
    const sPMinusS2=semiPerimeter-this._seg2._calculateLength;
    const sPMinusS3=semiPerimeter-this._seg3._calculateLength;

    return Math.sqrt(semiPerimeter*sPMinusS1*sPMinusS2*sPMinusS3);
    }


}