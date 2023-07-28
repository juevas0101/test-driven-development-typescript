export class Numbers {
    validation (numbers: number []) {
     let result: boolean = numbers.every((num) => {
      return num % 2 == 0
     })

     return result === true ?  true : false
    }
}