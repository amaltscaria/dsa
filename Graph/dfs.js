class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vtx) {
        if(!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = [];
        }
    }
    addEdge(vtx1, vtx2) {
        this.addVertex(vtx1);
        this.addVertex(vtx2);
        this.adjacencyList[vtx1].push(vtx2);
        this.adjacencyList[vtx2].push(vtx1);
    }

    removeVertex(vtx) {
        if(!this.adjacencyList[vtx])return 'Invalid Vertex!!!'
        while(this.adjacencyList[vtx].length){
            this.removeEdge(this.adjacencyList[vtx].pop(), vtx);
        }
        delete this.adjacencyList[vtx];
    }

    removeEdge(vtx1, vtx2) {
            if(!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2]) return 'Invalid Vertices!!!';
            this.adjacencyList[vtx1].filter(vertex=>vertex!==vtx2);
            this.adjacencyList[vtx2].filter(vertex=>vertex!==vtx1);
    }

    dfsRecursive(vertex) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        function dfs(vertex) {
            if(!vertex) return result;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) dfs(neighbour);
            });
        }
        dfs(vertex);
        return result;
    }
    dfsIterative(vertex) {
        const stack = [];
        const visited = {};
        const result = [];
        stack.push(vertex);
        visited[vertex] = true;
        while(stack.length) {
           const currentVertex = stack.pop();
           result.push(currentVertex);
           this.adjacencyList[currentVertex].forEach(neighbour=> {
            if(!visited[neighbour]){ visited[neighbour] = true;
            stack.push(neighbour);}
           })
        }
        return result;
    }
    bfs(vertex) {
        const queue = [];
        queue.push(vertex);
        const result = [];
        const visited = {};
        visited[vertex] = true;
        while(queue.length){
            const currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour=> {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }
}

const graph = new Graph();
// graph.addVertex('Cochin');
// graph.addVertex('Trivandrum');
// graph.addVertex('Calicut');
// graph.addVertex('Kannur');
// graph.addVertex('Chennai');
// graph.addVertex('Bengaluru');
// graph.addVertex('Mysore');
// graph.addEdge('Cochin', 'Trivandrum');
// graph.addEdge('Cochin', 'Calicut');
// graph.addEdge('Cochin', 'Bengaluru');
// graph.addEdge('Cochin', 'Mysore');
// graph.addEdge('Bengaluru', 'Mysore');
// graph.addEdge('Bengaluru', 'Trivandrum');
// graph.addEdge('Bengaluru', 'Calicut');
// graph.addEdge('Chennai', 'Calicut');
// graph.addEdge('Kannur', 'Calicut');
// graph.addEdge('Chennai', 'Mysore');
// graph.addEdge('Chennai', 'Bengaluru');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.dfsRecursive('A'));
console.log(graph.dfsIterative('A'));
console.log(graph.bfs('A'));
console.log(graph);