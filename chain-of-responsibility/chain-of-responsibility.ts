namespace ChainOfResponsibility {
    class Request {
        public constructor(private requestCode: number) {}

        public getRequestCode(): number {
            return this.requestCode
        }
    }

    class Handler {
        public constructor(private next: Handler) {}

        public setNext(next: Handler) {
            this.next = next
        }

        public handleRequest(request: Request) {
            if (this.next !== null) {
                this.next.handleRequest(request)
            }
        }
    }

    class FireDetectedRequest extends Request {
        public constructor() {
            super(1);
        }
    }

    class LowFuelRequest extends Request {
        public constructor() {
            super(2);
        }
    }

    class FireHandler extends Handler {
        private code = 1

        public constructor(next: Handler) {
            super(next);
        }

        public handleRequest(request: Request) {
            if (this.code === request.getRequestCode()) {
                // Handle the request here
            } else {
                super.handleRequest(request);
            }
        }
    }
}