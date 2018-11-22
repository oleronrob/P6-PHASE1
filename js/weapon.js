class Weapon {
    constructor(nom, degats, image) {
        this.name = nom;
        this.strength = degats;
        this.picture = image;
    }

    displayweapons() {
        for (let i = 1; i <= nbWeapons; i++) {
            let choixCase = caseAleatoire();
            $(testcase).append("<img></img>").addClass(this.name);
            $(testcase).children().attr("src", this.picture);
            $(testcase).parent().addClass("weapon");
            $(testcase).arme = this;
        }
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
