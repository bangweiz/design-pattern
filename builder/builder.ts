namespace Builder {
    class Car {

    }

    interface Builder {
        reset(): void
        buildSeats(): void
        buildEngine(): void
        buildComputer(): void
        buildGPS(): void
    }

    class CarBuilder implements Builder {
        private car: Car

        public constructor() {
            this.car = new Car()
        }

        buildComputer(): void {
        }

        buildEngine(): void {
        }

        buildGPS(): void {
        }

        buildSeats(): void {
        }

        reset(): void {
        }
        public getResult(): Car {
            return this.car
        }
    }

    class Decorator {
        public constructor(private builder: Builder) {
            this.make()
        }

        public changeBuilder(b: Builder) {
            this.builder = b
        }

        public make() {
            this.builder.reset()
            this.builder.buildSeats()
            this.builder.buildEngine()
            this.builder.buildComputer()
            this.builder.buildGPS()
        }
    }

    class Client {
        public main() {
            const builder = new CarBuilder()
            const decorator = new Decorator(builder)
            const car = builder.getResult()
        }
    }
}