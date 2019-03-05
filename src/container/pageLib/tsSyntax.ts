// 基本类型
// const num:number = 123

// const str:string = '234'

// const bol:boolean = true

// const numList:number[] = [1, 2]
// const numList2:Array<number> = [3, 4]

// const hybridList:[string, number] = ['str', 4]

// hybridList[3] = 4

// enum Color {'red', 'blue', 'green'}

// const cOne:Color = Color.red

// console.log(cOne);
// console.log(Color[2]);



// function type(name:string):string {
//     return `My name is ${name}`
// }

// const str:string = type('roy')

// const someStr:string = 'someStr'

// const strLen:number = (someStr as string).length


// interface Person {
//     name?: string | undefined
// }

// function hello(object):object

// const hello = ({name = 'roy'}:Person):void => {
//     console.log(`hello ${name}`);
// }

// hello({})

// hello({name: 'roy'})

// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// interface RSConfig { color: string; area: number }

// function createSquare(config: SquareConfig): RSConfig {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// console.log(mySquare);

// interface Point {
//     readonly x: number
//     readonly y: number
// }

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

//  做为变量使用的话用const，若做为属性则使用readonly。


// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     // ...
// }

// let mySquare = createSquare({ colour: "red", width: 100 });

// interface SearchFunc {
//     (source:string, subString: string): boolean
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// class person {
//     public name:string | undefined

//     constructor({name}: Person) {
//         this.name = name
//     }
// }

// function person(name:string, age=18, ...rest: any[]):string {
//     const str = `${name} is ${age} years old!`
//     return str
// }

// person('roy')
// person('roy', 18, 2, 'srt')

// HOF

// interface Person {
//     name: string
//     say(age: number): () => void
// }

// const Person = {
//     name: 'roy',
//     say() {
//         return (age: number) => {
//             console.log(this.name, age);
//         }
//     }
// }

// const say = Person.say()

// say(18)

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: { suit: string; card: number; }[]): number;
// function pickCard(x: number): { suit: string; card: number; };
// function pickCard(x: any): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// console.log(new person({name: 'roy'}));

// 几个问题
// 1. 参数默认值
// 2. 类的静态方法组织
// 3. 函数重载











const VAR: number = 23

export default VAR