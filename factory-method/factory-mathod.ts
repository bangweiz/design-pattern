abstract class Computer {
    public cpu: CPU

    abstract makeCPU(): void

    public run() {
        this.makeCPU()
        this.cpu.run()
    }
}

interface CPU {
    run(): void
}

class IntelCPU implements CPU {
    run() {
        console.log('Intel CPU is running')
    }
}

class AmdCPU implements CPU {
    run() {
        console.log('AMD CPU is running')
    }
}

class IntelComputer extends Computer {
    public makeCPU() {
        this.cpu = new IntelCPU()
    }
}

class AmdComputer extends Computer {
    public makeCPU() {
        this.cpu = new AmdCPU()
    }
}

function main() {
    const intelComputer = new IntelComputer()
    const amdComputer = new AmdComputer()
    intelComputer.run()
    amdComputer.run()
}

main()