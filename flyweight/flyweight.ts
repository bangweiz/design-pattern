namespace Flyweight {
    class TreeType {
        public constructor(public name: string, public color: string, public texture: string) {}

        public draw(x: number, y: number) {
            console.log(`Drawing at (${x}, ${y})`)
        }
    }

    class TreeFactory {
        public static treeTypes: TreeType[]
        public static getTreeType(name: string, color: string, texture: string): TreeType {
            const treeType = this.treeTypes.find(treeType => {
                return treeType.color === color &&
                    treeType.name === name &&
                    treeType.texture === texture
            })
            if (treeType) {
                return treeType
            }
            const newTreeType = new TreeType(name, color, texture)
            this.treeTypes.push(newTreeType)
            return newTreeType
        }
    }

    class Tree {
        public constructor(public x: number, public y: number, public type: TreeType) {}
        public draw() {
            this.type.draw(this.x, this.y)
        }
    }

    class Forest {
        public trees: Tree[]

        public plantTree(x: number, y: number, name: string, color: string, texture: string) {
            const type = TreeFactory.getTreeType(name, color, texture)
            const tree = new Tree(x, y, type)
            this.trees.push(tree)
        }

        public draw() {
            this.trees.forEach(tree => {
                tree.draw()
            })
        }
    }
}