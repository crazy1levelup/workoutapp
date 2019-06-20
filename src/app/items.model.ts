export class Workout {
    id: Number;
    name: String;
    type: String;
    videolink: String;
    description: String;

}

export class SavedWorkout {
    id: Number;
    nr: Number;
    name: String;
    type: String;
    videolink: String;
    description: String;
    day: String;
}

export class Results {
    constructor(public id:Number, type: String, number:Number, quantity: Number){}
}