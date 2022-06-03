namespace Prototype {
    abstract class Shape {
        public x: number
        public y: number
        public color: string

        protected constructor()
        protected constructor(x: number, y: number, color: string)
        protected constructor(x?: number, y?: number, color?: string) {
            if (x) {
                this.x = x
            }
            if (y) {
                this.y = y
            }
            if (color) {
                this.color = color
            }
        }

        abstract clone(): Shape
    }

    class Rectangle extends Shape {
        public width: number
        public height: number

        public constructor()
        public constructor(source: Rectangle)
        public constructor(source?: Rectangle) {
            if (source) {
                super(source.x, source.y, source.color);
                this.width = source.width
                this.height = source.height
            }
        }

        public clone(): Shape {
            return new Rectangle(this);
        }
    }

    class Client {
        public shapes: Shape[] = []
        public constructor() {
            const rectangle = new Rectangle()
            rectangle.x = 1
            rectangle.y = 1
            rectangle.color = 'red'
            rectangle.width = 1
            rectangle.height = 1
            this.shapes.push(rectangle.clone())
        }
    }
}