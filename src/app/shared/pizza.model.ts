export class Pizza {
    public imgUrl: string;
    public name: string;
    public description: string;
    public amount: number;
    public price: number;

   
    constructor(imgUrl: string,name: string, description: string, amount: number, price: number) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
    }

}