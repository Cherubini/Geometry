class Triangle{
    constructor(segment1, segment2, segment3)
        {
        this.segment1=segment1;
        this.segment2=segment2;
        this.segment3=segment3;
        }
    
    static fromPointToTriangle(point1A,point1B,point2A,point2B,point3A,point3B)
        {
        const seg1 = new Segment(point1A,point1B)
        const seg2 = new Segment(point2A,point2B)
        const seg3 = new Segment(point3A,point3B)
        return new Triangle(seg1,seg2,seg3);
        }

    calculateArea(){
    const s1length=this.segment1.calculateLength
    const s2length=this.segment2.calculateLength
    const s3length=this.segment3.calculateLength

    const perimeter=s1length+s2length+s3length;
    const semiPerimeter=perimeter/2;

    const sPMinusS1=semiPerimeter-s1length;
    const sPMinusS2=semiPerimeter-s2length;
    const sPMinusS3=semiPerimeter-s3length;

    return Math.sqrt(semiPerimeter*sPMinusS1*sPMinusS2*sPMinusS3);
    }


}