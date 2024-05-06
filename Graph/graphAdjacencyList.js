class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeVertex(vertex) {
        const data = this.adjacencyList[vertex];
        for(const i of data){
            this.adjacencyList[i] = this.adjacencyList[i].filter(vtx=>vtx!==vertex);
        }
        delete this.adjacencyList[vertex];
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vtx=>vtx!==vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vtx=>vtx!==vertex1);
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
// graph.removeVertex('B');
graph.removeEdge('A', 'C');
console.log(graph);