interface IBuilder {
    reset(): void
    assembleEngine(): void
    colorize(): void
    customizeInteriorDesign(): void
    getCar(): Car
}
interface ICar {
    showInfo(): void
}

interface IDirector {
    setBuilder(builder: BMWBuilder): void
    produceCar(): void
}

class BMWBuilder implements IBuilder {
    private car: Car
    private readonly model: string
    private readonly engine: number
    private readonly color: string
    private readonly customInteriorDesign: boolean


    constructor(model: string, engine: number, color: string, customInteriorDesign: boolean = false) {
        this.reset()
        this.model = model
        this.color = color
        this.engine = engine
        this.customInteriorDesign = customInteriorDesign
    }

    reset() : void{
        this.car = new Car()
    }

    assembleEngine(): void {
        this.car.model = this.model
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
    model: string = ''
    engine: number = 0
    color: string = ''
    customInteriorDesign: boolean = false

    showInfo() {
        console.log(`
        * model: ${this.model}
        * Engine: ${this.engine}cc
        * color: ${this.color}
        * customInteriorDesign: ${this.customInteriorDesign}`)
    }
}

class Director implements IDirector{
    private builder: BMWBuilder

    setBuilder(builder: BMWBuilder): void {
        this.builder = builder
    }

    produceCar(): void {
        this.builder.assembleEngine()
        this.builder.colorize()
        this.builder.customizeInteriorDesign()
    }
}

const client = (director: Director) => {
    const m4Builder = new BMWBuilder('gt86', 3500, 'red', true)
    director.setBuilder(m4Builder)
    director.produceCar()
    m4Builder.getCar().showInfo()

    const m4GtsBuilder = new BMWBuilder('m4 GTS', 4000, 'black', true)
    director.setBuilder(m4GtsBuilder)
    director.produceCar()
    m4GtsBuilder.getCar().showInfo()

}
const director = new Director()
client(director)
