export class TotalPurchases {
  wallet: number;
  total: number;
  shopping: {[key: string]:  number}

  constructor (wallet: number, shopping: {[key: string]: number}) {
    this.wallet = wallet;
    this.shopping = shopping;
    this.total = this.calculateTotal(shopping);
  }
  
  authorizePurchase(): string {
    return this.wallet >= this.total ? "Successful purchase!" : "Unauthorized purchase.";
  }

  private calculateTotal(shopping: {[key: string]: number}): number {
   const purchases = Object.values(shopping);
   return purchases.reduce((acc, value) => acc + value, 0)
  }

  calculateChange(): string {
   const change = this.wallet - this.total;
   return change >= 0 ? "R$" +Number(change.toFixed(2)) : "R$0,00";
  }
}

const shopping: {[key: string]: number} = {
  shoes: 34.90,
  notebook: 1200,
  banana: 12.45,
};