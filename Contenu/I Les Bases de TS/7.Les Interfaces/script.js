"use strict";
var Vehicule = /** @class */ (function () {
    function Vehicule(imma, marque, price, carburant) {
        this.imma = imma,
            this.marque = marque,
            this.price = price,
            this.carburant = carburant;
    }
    Vehicule.prototype.acheter = function (action) {
        console.log(action);
    };
    return Vehicule;
}());
var vh1 = new Vehicule(123, 'citroen', 12334, "essence");
vh1.acheter("Je l'ai acheté pour 50€!"); // Je l'ai acheté pour  50€!
console.log("L'IMMA de la voiture est : ".concat(vh1.imma, " et le prix en euros est : ").concat(vh1.price));
