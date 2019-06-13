export class Workout {
    id: Number;
    name: String;
    type: String;
    videolink: String;
    description: String;

}

export class Test {
   count: Number;
   next: String;
   previous: String;
   results: Results[];
}

export class Results {
    constructor(public id:Number, type: String, number:Number, quantity: Number){}
}