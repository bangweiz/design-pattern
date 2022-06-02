namespace Facade {
    class BoeingAltitudeMonitor {
        public autoMonitor() {
            console.log("Auto monitoring starting")
        }
    }

    class BoeingEngineController {
        private speed: number

        public setEngineSpeed(speed: number) {
            this.speed = speed
        }

        public getEngineSpeed(): number {
            return this.speed
        }
    }

    class BoeingFuelMonitor {
        public getRemainingFuelInGallons() {
            return 10
        }
    }

    class BoeingNavigationSystem {
        public setDirectionBasedOnSpeedAndFuel(speed: number, fuel: number) {

        }
    }


    class AutoPilotFacade {
        public constructor(
            private altitudeMonitor: BoeingAltitudeMonitor,
            private engineController: BoeingEngineController,
            private fuelMonitor: BoeingFuelMonitor,
            private navigationSys: BoeingNavigationSystem
        ) {}

        public autoPilotOn(): void {
            this.altitudeMonitor.autoMonitor()
            this.engineController.setEngineSpeed(700)
            this.navigationSys.setDirectionBasedOnSpeedAndFuel(
                this.engineController.getEngineSpeed(),
                this.fuelMonitor.getRemainingFuelInGallons()
            )
        }
    }
}