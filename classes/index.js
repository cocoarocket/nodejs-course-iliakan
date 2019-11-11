'use strict';

// безымянный
class RectangleOne {
  constructor() {
    this.variable = "cool";
  }

  putsV () {
    console.log(this.variable);
  }

  puts(){
    console.log("One");
  }
};

// именованный
class RectangleTwo extends RectangleOne {
  constructor() {
    super();
  }

  static puts(){
    console.log("Two");
  }
};

let two = new RectangleTwo();
RectangleTwo.puts();

two.putsV();