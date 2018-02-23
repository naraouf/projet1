class Personnage {
    constructor(name, vitesse, position) {
        this.name = name;
        this.force = 100;
        this.sante = 100;
        this.position = position;
        this.vitesse = vitesse;


    }
    attack(target) {
        //this.force -= 5;
        target.sante -= 5;
    }
    destabilise() {

    }





}


