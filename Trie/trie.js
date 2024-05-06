class Node {
    constructor() {
        this.values = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++){
            if(!current.values[word[i]])current.values[word[i]] = new Node();
            current = current.values[word[i]];
        }
        current.values.endOfWord = true;
    }
    search(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++){
            if(!current.values[word[i]])return false;
            current = current.values[word[i]];
        }
        if(current.values.endOfWord)return true;
        return false;
    }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('apple23');
trie.insert('apple56');
console.log(trie.search('apple56'))
