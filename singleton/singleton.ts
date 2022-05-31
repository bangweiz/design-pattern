class EagerSingleton {
    private static instance = new EagerSingleton()
    private constructor() {}
    public static getInstance(): EagerSingleton {
        return this.instance
    }
}

class LazySingleton {
    private static instance: LazySingleton
    private constructor() {}
    public static getInstance(): LazySingleton {
        if (this.instance === null) {
            this.instance = new LazySingleton()
        }
        return this.instance
    }
}