// soal ke 1 
// release 1 
class Animal {
    constructor() {
        this._name = "";
        this._legs = "";
        this.cold_blooded = "";
    }
    get name() {
        return this._name
    }
    set name(x) {
        this._name = x;
    }
}

var sheep = new Animal();
sheep.name = "shaun";
sheep.legs = 5;
sheep.cold_blooded = false;

console.log('----- POINT A -----')
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 2
class Ape extends Animal {
    get name() {
        return super.name
    }
    set name(v) {
        this._name = v
    }
    yell() {
        return 'Auoooo'
    }
}

class Frog extends Animal {
    get name() {
        return super.name
    }
    set name(v) {
        this._name = v
    }
    jump() {
        return 'hop hop'
    }
}

console.log('----- POINT B -----')
var sungokong = new Ape();
sungokong.name = "kera sakti"
sungokong.legs = 2;
sungokong.cold_blooded = 4;

console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell())


var kodok = new Frog()
kodok.name = "buduk"
kodok.legs = 4
kodok.cold_blooded = 2

console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump())

// soal ke 2
class Clock {

    constructor({
        template
    }) {
        this._template = template;
        this._timer;
    }

    get tema() {
        return this._template
    }
    set tema(x) {
        this._template = x
    }

    render = () => {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        // var output = this.timer
        //     .replace('h', hours);

        var output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this._timer);
    }

    start() {
        this.render();
        this._timer = setInterval(this.render, 1000);
    }

}
var clock = new Clock({
    template: 'h:m:s'
});
clock.start();