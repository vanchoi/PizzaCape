export class Ingredient {
    public name: string;
    public amount: number;
    public singlePrice: number;

    decrease() {
        if (this.amount) {
            this.amount -= 1;
        }
    }

    increase() {
        if (this.amount < 3) {
            this.amount += 1;
        }
    }


    constructor(name: string, singlePrice: number, amount: number) {
        this.name = name;
        this.amount = amount;
        this.singlePrice = singlePrice;
    }

}