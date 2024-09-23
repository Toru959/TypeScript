class Person {
    name: string;
    constructor(initName: string){
       this.name = initName; 
    }
}

const Username = new Person('Json');
console.log(Username);
