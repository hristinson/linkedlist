import React, { useCallback, useState } from "react";


const LinkedlistApp = () => {

  const generageRandomNumber = () => {
    return Math.floor(Math.random() * 50);
  };

  class Node<T, K> {
    value: T;
    next?: K;

    constructor(value: T, next?: K) {
      this.value = value;
      this.next = next;
    }

    item() {
      return this.value;
    }
  }

  class LinkedList {
    head: any;
    tail: any;

    constructor() {
      this.head = null;
      this.tail = null;
    }

    bubbleSort() {
      let currentNode = this.head;
      let trigger = true;

      while (trigger) {
        let inneTrigger = false;
        while (currentNode) {
          if (currentNode.next && currentNode.value > currentNode.next.value) {
            [currentNode.next.value, currentNode.value] = [
              currentNode.value,
              currentNode.next.value,
            ];
            inneTrigger = true;
          }

          currentNode = currentNode.next;
          console.log(trigger);
        }

        if (!inneTrigger) trigger = false;
        currentNode = this.head;
      }
      return this
    }

    appendItem(value: number) {
      const newNode = new Node(value);

      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;

        return this;
      }

      this.tail.next = newNode;
      this.tail = newNode;

      return this;
    }

    toArray() {
      const arrayOfNodes = [];
      let currentNode = this.head;

      while (currentNode) {
        arrayOfNodes.push(currentNode);
        currentNode = currentNode.next;
      }
      return arrayOfNodes;
    }
  }

  const [listOfElements, setListOfElements] = useState(new LinkedList());
  const [calc, setCalc] = useState(0);

  const minusEmployer = useCallback(() => {}, []);
    
  const bubbleSort = useCallback(() => {
        setListOfElements(listOfElements.bubbleSort());
  }, [setListOfElements, listOfElements]);


  const plusEmployer = useCallback(() => {
    setListOfElements(listOfElements.appendItem(generageRandomNumber()));
    setCalc(calc + 1);
  }, [listOfElements, setCalc, calc]);

  const Updated = () => {
    return <div>Sorted!</div>;
  };

  return (
    <>
      <div>
        <div>
          <button onClick={minusEmployer}>- Element</button>
          <span>Counter of elelments - {calc}</span>
          <button onClick={plusEmployer}>+ Element</button>
        </div>
        <div>
          <span>Linked List</span>
          <div id="main">
            {
              listOfElements.toArray().map((element: any, key: number) => {
                return (
                  <li key={key}>
                    {JSON.stringify(element.value)}
                    {/* {JSON.stringify(element)} in {key} */}
                  </li>
                );
              })
            }
          </div>
        </div>
        <button onClick={bubbleSort}>SORT List by bubble method</button>
        <Updated />
      </div>
    </>
  );
};

export default LinkedlistApp;
