namespace Iterator {
    interface Iterator<T> {
        hasNext(): boolean
        next(): T
    }

    interface Aggregator<T> {
        iterator(): Iterator<T>
    }

    class WordsCollection implements Aggregator<string> {
        private collection: string[] = []

        public getCollection() {
            return this.collection
        }

        public size() {
            return this.collection.length
        }

        public add(word: string) {
            this.collection.push(word)
        }

        public get(i: number) {
            return this.collection[i]
        }

        public iterator(): Iterator<string> {
            return new WordsIterator(this)
        }
    }

    class WordsIterator implements Iterator<string> {
        private position = 0

        public constructor(private collection: WordsCollection) {}

        public hasNext() {
            return this.position < this.collection.size()
        }

        public next() {
            return this.collection.get(this.position++)
        }
    }

    const words = new WordsCollection()
    words.add('Hello')
    words.add('World')
    const it = words.iterator()
    while (it.hasNext()) {
        console.log(it.next())
    }
}