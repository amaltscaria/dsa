class HT {
    constructor() {
        this.data = new Array(10);
    }
    _hash(key) {
        key = String(key);
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            
            hash = (hash + key.charCodeAt(i) * 23) % (this.data.length - 1);
        }
        return hash;
       
    }

    set(key, val){
        const index = this._hash(key);
        const bucket = this.data[index] || [];
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0]===key){bucket[i][1]=val; return;}
        }
        bucket.push([key, val]);
        this.data[index] = bucket;
    }

    get(key){
        const index = this._hash(key);
        const bucket = this.data[index];
        if(!bucket) return undefined;
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0]===key)return bucket[i][1];
        }
        return undefined;
    }

    duplicates(arr) {
        for(let i = 0; i< arr.length; i++){
            if(this.data.get(arr[i])){
                this.data.set(arr[i], this.data.get(arr[i])+1);
            }else {
                this.data.set(arr[i],1);
            }
        }
        
    }
}

const ht = new HT();
ht.duplicates([2,5,6,762,1,24,645,6,64,4])