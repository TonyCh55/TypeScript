class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly nemberOfWheels: number = 4;
//
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

//above expression is equal to bottom!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

class Car {
  readonly nemberOfWheels: number = 4;

  constructor(readonly model: string) {
    this.model = model;
  }
}

//=============================
class Animal {
  protected voice: string = ""; //cant use in instance like cat but use it in class Cat
  public color: string = "black";
  private go() {
    //only for Animal
    console.log("GO");
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat = new Cat();

cat.setVoice("test");
console.log(cat.color);

//==================Abstracts
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "Info";
  }
}
