function Rectangle(length, width){
    this.length = length;
    this.width = width;
}
Rectangle.prototype.getArea = function(){
    return this.length * this.width;
} 
Rectangle.prototype.getCircumference = function(){
    return this.width*2 + this.length*2;
}
module.exports = Rectangle;