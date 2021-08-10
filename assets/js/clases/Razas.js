import Personajes from "./Personajes.js";

class Saiyajin extends Personajes{
    constructor(nombre, img, poder, raza){
        super(nombre,img,poder,raza)
    }

    Transformacion(){
        let poder = this.getPoder();
        this.setPoder(parseInt(poder * 1.8));
    }
}

class Humano extends Personajes{
    constructor(nombre, img, poder, raza){
        super(nombre,img,poder,raza)
    }

    Coraje(){
        let poder = this.getPoder();
        this.setPoder(parseInt(poder * 1.2));
    }
}

//console.log(new Humano ("dsjdsjds", "jkjjk", 2555, "jdjdsjds"))

export { Saiyajin, Humano };