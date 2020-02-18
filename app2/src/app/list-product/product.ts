export class Product{
    id:number;
    name:string;
    price:number;
    imgurl:string;
    constructor(id?:number,name?:string,price?:number,imgurl?:string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.imgurl=imgurl;

    }
}