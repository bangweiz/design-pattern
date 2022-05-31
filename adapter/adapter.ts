interface IAircraft {
    fly(): void
}

class HotAirBalloon {
    public gasUsed = 'Helium'
    public fly(gasUsed: string) {
        console.log(`flying with ${gasUsed}`)
    }
    public inflateWithGas(): string {
        return this.gasUsed
    }
}

class Adapter implements IAircraft {
    public constructor(private hotAirBalloon: HotAirBalloon) {}
    public fly() {
       this.hotAirBalloon.fly(this.hotAirBalloon.inflateWithGas())
    }
}

function main() {
    const hotAirBalloon = new HotAirBalloon()
    const hotAirBalloonAdapter = new Adapter(hotAirBalloon)
    hotAirBalloonAdapter.fly()
}

main()