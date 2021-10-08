class Trie {
    
    arr = [];
    
    constructor() {

    }

    insert(word: string): void {
        
        this.arr.push(word);

    }

    search(word: string): boolean {

        return this.arr.includes(word);
    }

    startsWith(prefix: string): boolean {

        let res = this.arr.findIndex( e => e.startsWith(prefix));
        return res == -1 ? false : true;
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
