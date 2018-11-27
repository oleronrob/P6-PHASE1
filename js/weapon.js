class Weapon {
    constructor(nom, degats, image) {
        this.name = nom;
        this.strength = degats;
        this.picture = image;
    }

    draw(id) {
        //$(id).append("<img></img>").addClass("anavailable " + this.name);
        //$(id).children().attr("src", this.picture);
        //$(id).arme = this;
        //tabboard[id[1]][id[2]].anaivalableCell()
        let pictWeapon = 'url('+ this.picture + ') no-repeat, radial-gradient(white 5%, blue 200%, white 60%)'
        $(id).css('background', pictWeapon)
        $(id).css('background-size', "cover")
        $(id).addClass("anavailable weapon "+ this.name)
    }

    weaponPrise(selectCase, lastWeapon, nextWeapon) {
        $(selectCase).arme = nextWeapon
        $(selectCase + " img " + lastWeapon.name).attr("src", nextWeapon.picture)
        //$("#" + this.id).removeClass(lastweapon.nom).addClass("weapon " + weapon);
        //$("#" + this.id).children().attr("src", lastweapon.image).addClass("weapon " + weapon);
        return;
    }
}

let Weapon0 = new Weapon("weapon0", 10, "./pictures/weapon0.png");
let Weapon1 = new Weapon("weapon1", 15, "./pictures/weapon1.png");
let Weapon2 = new Weapon("weapon2", 20, "./pictures/weapon2.png");
let Weapon3 = new Weapon("weapon3", 25, "./pictures/weapon3.png");
let Weapon4 = new Weapon("weapon4", 30, "./pictures/weapon4.png");
let tabweapon = [Weapon0, Weapon1, Weapon2, Weapon3, Weapon4]
