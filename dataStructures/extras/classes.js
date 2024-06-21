// revising classes and objects

// reference type

// Instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  // method
  introduce() {
    console.log(`Hello I am ${this.name}, I am a ${this.type}`);
  }
}

// extending class
class Wizard extends Player {
  constructor(name, type) {
    // super allowing to pass name and type of the wizard into the player type
    super(name, type);
  }
  play() {
    console.log(`weeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Jeff','Dark artist' )
const wizard2 = new Wizard('Chelsea','Healer' )

wizard1.introduce()
wizard1.play()