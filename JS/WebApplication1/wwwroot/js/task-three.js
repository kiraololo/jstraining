if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this.length > 0 ? this[0] : null;
    }
}

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this.length > 0 ? this[this.length-1] : null;
    }
}

if (!Array.prototype.random) {
    Array.prototype.random = function () {
        if (this.length == 0)
            return null;
        let randomIndex = Math.floor(Math.random() * this.length);
        return this[randomIndex];
    }
}

// Создание класса
function createClass(obj) {
    function _class(args) {
        obj.constructor.call(this, args);
    };
    for (let prop in obj) {
        if (prop != 'constructor') {
            _class.prototype[prop] = obj[prop];
        }
    }
    return _class;
}

// Наследование
function extend(childClass, parentClass) {
    Object.setPrototypeOf(childClass.prototype, parentClass.prototype);
    Object.setPrototypeOf(childClass, parentClass);
}

// Проверка создания классов
const Cat = createClass({
    constructor(name) {
        this.name = name;
    },
    meow() {
        console.log(`Meow, I'm ${this.name}`);
    },
    balsCount: 0
});

const barsik = new Cat("Barsik");
barsik.meow();


// Проверка наследования
class ParentClass {
    constructor(name) {
        this.name;
    }
    showName() {
        console.log(this.name);
    }    
}

class ChildClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showAge() {
        console.log(this.age);
    }
}

extend(ChildClass, ParentClass);
var extended = new ChildClass("test", 12);