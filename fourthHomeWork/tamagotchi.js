function Tamagotchi(name) {
    this.name = name;
    this.health = 100;
    this.strength = 100;
    this.power = 100;
    this.happiness = 100;
    this.hygiene = 100;
}

let tom = new Tamagotchi('Cat Tom');

Tamagotchi.prototype.time = function() {
    let that = this;
    let time = setTimeout(function run() {
        if (that.power > 0 && that.strength > 0) {
            that.strength--;
        }

        if (that.strength < 95 && that.power > 0) {
            that.power--;
        }

        if (that.strength < 85 && that.happiness > 1) {
            that.happiness--;
            if (that.health < 50) {
                that.happiness -= 2;
            }
        }

        if (that.power < 80) {
            that.health--;
        }

        if (that.power < 20 || that.strength < 10) {
            that.health -= 2;
        }

        if (that.strength < 60) {
            document.querySelector('.eat').setAttribute('style', "display: inline;");
        } else {
            document.querySelector('.eat').setAttribute('style', "display: none;");
        }

        if (that.happiness < 60) {
            document.querySelector('.play').setAttribute('style', "display: inline;");
        } else {
            document.querySelector('.play').setAttribute('style', "display: none;");
        }

        if (that.power < 60) {
            document.querySelector('.energy').setAttribute('style', "display: inline;");
        } else {
            document.querySelector('.energy').setAttribute('style', "display: none;");
        }

        if (that.health <= 0) {
            clearTimeout(time);
            that.health = 0;
            that.strength = 0;
            that.power = 0;
            that.happiness = 0;
            that.hygiene = 0;
            that.updateInfo();
            alert(`${that.name} die`);
            return;
        }
        that.updateInfo();
        setTimeout(run, 1000);
    }, 1000);
};

Tamagotchi.prototype.eat = function() {
    if (this.strength > 80) {
        alert("Я не хочу їсти");
    } else {
        let that = this;
        setTimeout(function () {
            if (that.health <= 90) {
                that.health += 5;
            }
            that.strength += 15;
            that.power += 10;
            if (that.happiness < 95) {
                that.happiness += 5;
            }
            that.hygiene -= 10;
        }, 100);
    }
};

Tamagotchi.prototype.play = function() {
    if (this.happiness > 80) {
        alert("Я не хочу гратись");
    } else {
        let that = this;
        setTimeout(function () {
            that.strength -= 2;
            that.power -= 5;
            that.happiness += 15;
            that.hygiene -= 20;
        }, 100)
    }
};

Tamagotchi.prototype.sleep = function() {
    if (this.power > 80) {
        alert("Я не хочу спати");
    } else {
        let that = this;
        console.log('сплю!');

        setTimeout(function () {
            that.power += 20;
            that.happiness += 5;
        }, 100);
    }
};

Tamagotchi.prototype.treated = function() {
    if (this.health > 80) {
        alert("Я здоровий");
    } else {
        let that = this;
        setTimeout(function () {
            that.power += 5;
            that.happiness += 15;
            that.health += 20;
            that.hygiene -= 10;
        }, 100);
    }
};

Tamagotchi.prototype.swim = function() {
    if (this.hygiene > 80) {
        alert("Я чистий");
    } else {
        let that = this;
        setTimeout(function () {
            that.health++;
            that.hygiene += 20;
        }, 100);
    }
};

Tamagotchi.prototype.updateInfo = function() {
    document.querySelector('.name').innerHTML = this.name;
    let health = document.querySelector('.health');
    health.innerHTML = 'Здоров\'я ' + this.health;
    health.setAttribute('style', `width: ${this.health * 3}px;`);

    let strength = document.querySelector('.strength');
    strength.innerHTML = 'Ситість ' + this.strength;
    strength.setAttribute('style', `width: ${this.strength * 3}px;`);

    let power = document.querySelector('.power');
    power.innerHTML = 'Енергія ' + this.power;
    power.setAttribute('style', `width: ${this.power * 3}px;`);

    let happiness = document.querySelector('.happiness');
    happiness.innerHTML = 'Щастя ' + this.happiness;
    happiness.setAttribute('style', `width: ${this.happiness * 3}px;`);

    let hygiene = document.querySelector('.hygiene');
    hygiene.innerHTML = 'Гігієна ' + this.hygiene;
    hygiene.setAttribute('style', `width: ${this.hygiene * 3}px;`);
};

tom.time();