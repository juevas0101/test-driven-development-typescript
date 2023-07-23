import { TotalPurchases } from "../totalpurchases";

describe('TotalPurchases', () => {
  it('should return "successful purchase"', () => {
    const shopping: {[key: string]: number} = {
      shoes: 34.90,
      notebook: 1200,
      banana: 12.45,
    };

    const purchase = new TotalPurchases(4000, shopping);
 
    expect(purchase.authorizePurchase()).toBe("Successful purchase!")
  })

  it('should return "unauthorized purchase"', () => {
    const shopping: {[key: string]: number} = {
      shoes: 34.90,
      notebook: 1200,
      banana: 12.45,
    };

    const purchase = new TotalPurchases(400, shopping);
 
    expect(purchase.authorizePurchase()).toBe("Unauthorized purchase.")
  })

  it('should return change', () => {
    const shopping: {[key: string]: number} = {
      shoes: 34.90,
      notebook: 10,
      banana: 12.45,
    };

    const purchase = new TotalPurchases(4000, shopping);
 
    expect(purchase.calculateChange()).toBe('R$3942.65')
  })

  it('should return change "R$0,00"', () => {
    const shopping: {[key: string]: number} = {
      shoes: 34.90,
      notebook: 10,
      banana: 12.45,
    };

    const purchase = new TotalPurchases(40, shopping);
 
    expect(purchase.calculateChange()).toBe('R$0,00')
  })
}) 