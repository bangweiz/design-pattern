namespace Visitor {
    interface Shape {
        move(x: number, y: number): void
        draw(): void
        accept(v: Visitor): void
    }

    class Dot implements Shape {
        accept(v: Visitor): void {
            v.visitDot(this)
        }

        draw(): void {
        }

        move(x: number, y: number): void {
        }
    }

    class Circle implements Shape {
        accept(v: Visitor): void {
            v.visitCircle(this)
        }

        draw(): void {
        }

        move(x: number, y: number): void {
        }

    }

    interface Visitor {
        visitDot(d: Dot): void
        visitCircle(c: Circle): void
    }

    class XMLExportVisitor implements Visitor {
        visitCircle(c: Circle): void {

        }

        visitDot(d: Dot): void {

        }
    }

    class Client {
        public main() {
            const shapes: Shape[] = []
            const visitor = new XMLExportVisitor()
            shapes.push(new Dot())
            shapes.push(new Circle())

            shapes.forEach(shape => {
                shape.accept(visitor)
            })
        }
    }
}