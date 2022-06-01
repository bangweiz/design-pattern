namespace Composite {
    interface Graphic {
        move(x: number, y: number): void
        draw(): void
    }

    class Dot implements Graphic {
        public x: number
        public y: number

        public constructor(x: number, y: number) {
            this.x = x
            this.y = y
        }

        public move(x: number, y: number) {
            this.x += x
            this.y += y
        }

        public draw() {
            console.log(`Draw a dot at (${this.x}, ${this.y})`)
        }
    }

    class Circle implements Graphic {
        public radius: number
        public x: number
        public y: number

        public constructor(x: number, y: number, radius: number) {
            this.x = x
            this.y = y
            this.radius = radius
        }

        public draw(): void {
            console.log(`Draw a dot of which center at (${this.x}, ${this.y}) with a radius of ${this.radius}`)
        }

        public move(x: number, y: number): void {
            this.x += x
            this.y += y
        }
    }

    class CompoundGraphic implements Graphic {
        private children: Graphic[]

        public add(child: Graphic) {
            this.children.push(child)
        }

        public remove(child: Graphic) {
            // remove the child
        }

        public draw(): void {
            this.children.forEach(child => child.draw())
        }

        public move(x: number, y: number): void {
            this.children.forEach(child => child.move(x, y))
        }
    }
}