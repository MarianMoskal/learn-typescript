
// bad

let dontDoThis: object ={};

let dontDoThisAgain: any = [{a:"1"}];




// nice

let a: number = 4;

let b: string = "6";

let c: boolean = true;

let d: number | string | boolean = "wow";

let array: number[] = [1, 2, 3, 4, 5, 6];

let newArray: Array<number> = [1, 2, 3, 4, 5, 6];

let mixArray: (string | number)[] = [1, 2, 3, "4", "5", "6"];

let readOnlyArray: readonly number[] = [1, 2, 3, 4, 5, 6];

let tupleArray: [number, string] = [1, "2"];  //if tuple, must write types!


console.log(a, b, c, d, array, newArray, mixArray, readOnlyArray, tupleArray, dontDoThis, dontDoThisAgain);


export {};