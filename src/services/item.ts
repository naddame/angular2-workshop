export class Item {

  private price:number;
  private label:string;

  constructor(label:string, price:number) {
    this.label = label;
    this.price = price;
  }

  public get price(){
    return this.price;
  }

  public get label(){
    return this.label;
  }
}
