namespace Decorator {
    interface IAircraft {
        getWeight(): number
    }

    class Boeing747 implements IAircraft {
        private baseWeight = 100

        public getWeight(): number {
            return this.baseWeight;
        }
    }

    abstract class BoeingDecorator implements IAircraft {
        protected boeing: IAircraft
        public constructor(boeing: IAircraft) {
            this.boeing = boeing
        }
        public abstract getWeight(): number
    }

    class LuxuryFittings extends BoeingDecorator {
        public getWeight(): number {
            return 30 + this.boeing.getWeight();
        }
    }

    class BulletProof extends BoeingDecorator {
        public getWeight(): number {
            return 50 + this.boeing.getWeight();
        }
    }

    function main() {
        const simpleBoeing = new Boeing747()
        const luxuryBoeing = new LuxuryFittings(simpleBoeing)
        const bulletProofBoeing = new BulletProof(simpleBoeing)
        console.log(luxuryBoeing.getWeight())
        console.log(bulletProofBoeing.getWeight())
    }

    main()
}
