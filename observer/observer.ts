namespace Observer {
    interface IEvent {
        update(): void
    }

    class Event implements IEvent {
        public constructor(
            private eventType: string,
            private eventManager: EventManager,
            private callback: () => void
        ) {
            eventManager.subscribe(eventType, this)
        }

        public update() {
            this.callback()
        }
    }

    class EventManager {
        private events: Map<string, IEvent[]> = new Map()

        public subscribe(eventType: string, event: IEvent) {
            if (this.events.has(eventType)) {
                (this.events.get(eventType) as IEvent[]).push(event)
            } else {
                this.events.set(eventType, [event])
            }
        }

        public unsubscribe(event: IEvent) {
            // remove event
        }

        public notify(eventType: string) {
            if (this.events.has(eventType)) {
                (this.events.get(eventType) as IEvent[]).forEach(event => {
                    event.update()
                })
            }
        }
    }

    class Client {
        private eventManager = new EventManager()

        public main() {
            new Event('click', this.eventManager, () => console.log('Click Event 1'))
            new Event('click', this.eventManager, () => console.log('Click Event 2'))
            this.eventManager.notify('click')
        }
    }

    const client = new Client()
    client.main()
}