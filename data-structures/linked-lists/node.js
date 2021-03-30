function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.length = 0;
    this.head = null;
}

SinglyLinkedList.prototype.add = function(value) { let node = new Node(value), currentNode = this.head};