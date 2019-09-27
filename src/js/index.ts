let knap: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap")
knap.addEventListener("click", calculate)
function calculate(): void {
    let number1Field: HTMLInputElement = <HTMLInputElement>document.getElementById("number1")
    let number2Field: HTMLInputElement = <HTMLInputElement>document.getElementById("number2")
    let number1string: string = number1Field.value
    let number2string: string = number2Field.value
    let number1: number = Number(number1string)
    let number2: number = Number(number2string)
    let result: number = number1 + number2
    let resultElement: HTMLInputElement = <HTMLInputElement>document.getElementById("result")
    resultElement.innerHTML = result + ""}