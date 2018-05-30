export class Pizza {
    public name: string;
    public description: string;
    public amount: number;
    public price: number;

   
    constructor(name: string, description: string, price: number, amount: number) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
    }

}