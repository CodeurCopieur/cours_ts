interface Voiture {
  imma: number,
  marque: string,
  acheter: (action: string) => void
}

interface Voiture {
  price: number,
  carburant: string
}

class Vehicule implements Voiture {
  imma: number;
  marque: string;
  price: number;
  carburant: string;
  

  constructor(imma: number, marque: string, price: number, carburant: string) {
      this.imma = imma,
      this.marque = marque,
      this.price = price,
      this.carburant = carburant
    }
    
    acheter(action: string){
      console.log(action);
      
    }
}

const vh1 = new Vehicule(123, 'citroen', 12334, "essence");
vh1.acheter("Je l'ai acheté pour 50€!"); // Je l'ai acheté pour  50€!
console.log(`L'IMMA de la voiture est : ${vh1.imma} et le prix en euros est : ${vh1.price}`);