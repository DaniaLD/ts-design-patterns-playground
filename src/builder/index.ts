interface IBuilder {
    car: Car
    engine: number
    color: string
    customInteriorDesign: boolean

    reset(): void
    assembleEngine(): void
    colorize(): void
    customizeInteriorDesign(): void
    getCar(): Car
}
interface ICar {
    engine: number
    color: string
    customInteriorDesign: boolean

    showInfo(): void
}

class BMWFactory implements IBuilder {
    private car: Car
    private readonly engine: number
    private readonly color: string
    private readonly customInteriorDesign: boolean


    constructor(engine: number, color: string, customInteriorDesign: boolean = false) {
        this.reset()
        this.color = color
        this.engine = engine
        this.customInteriorDesign = customInteriorDesign
    }

    reset() : void{
        this.car = new Car()
    }

    assembleEngine(): void {
        this.car.engine = this.engine
    }

    colorize(): void {
        this.car.color = this.color
    }

    customizeInteriorDesign(): void {
        this.car.customInteriorDesign = this.customInteriorDesign
    }

    getCar(): Car {
        const car = this.car
        this.reset()
        return car
    }
}

class Car implements ICar{
    engine: number = 0
    color: string = ''
    customInteriorDesign: boolean = false

    showInfo() {
        console.log(`* Engine: ${this.engine}cc\n* color: ${this.color}\n* customInteriorDesign: ${this.customInteriorDesign}`)
    }
}

