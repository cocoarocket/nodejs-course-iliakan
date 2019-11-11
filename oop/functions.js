function Animal() { }

Animal.prototype.speak = function(){
  this.name = "Noq";
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // глобальный объект

let eat = Animal.eat;
eat(); // глобальный объект