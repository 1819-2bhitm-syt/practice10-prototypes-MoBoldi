const square = require("./square");
const rectangle = require("./rectangle");
let figures = [new square(2), new square(5), new square(10), new rectangle(5, 3), new rectangle(10, 4)];
for (let figure of figures){
    console.log(figure);
    console.log("Fläche: "+figure.getArea());
    console.log("Umfang: "+figure.getCircumference()+"\n");
}

