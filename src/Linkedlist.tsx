import React, { useCallback, useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

// let x: { name: string };
// let y: { name: string; age: number };
// let z: any = { name: `Fred`, lastname: `Godzila`, age: 34 };

//x = { name: `Ted` };
//y = { name: `Bobo`, age: 45 };
//x = z;
//y = z;
//x = y;
// y = x; ERROR

const LinkedlistApp = () => {
  const generageRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const getRandomName = () => {
    const arrayOfNames = [
      `Samael`,
      `Rafael`,
      `Zoltar`,
      `Gabriel`,
      `Parfenon`,
      `Solomon`,
      `SiDzenPin`,
      `Yohan`,
      `Pikachu`,
      `Pokemon`,
      `Philimon`,
      `Tokio`,
    ];

    const generageRandomNumber = () => {
      return Math.floor(Math.random() * 11);
    };

    return arrayOfNames[generageRandomNumber()];
  };

  class Node<T> {
    value: T;
    text: any;
    next: Node<T> | null;

    constructor(value: T, text: any, next = null) {
      this.value = value;
      this.next = next;
      this.text = text;
    }

    item() {
      return this.value;
    }
  }

  class LinkedList<K> {
    head: Node<K> | null;
    tail: Node<K> | undefined;

    constructor() {
      this.head = null;
      this.tail = undefined;
    }

    deleteEmployer(value: number, text: string) {
      let currentNode = this.head;
      while (currentNode) {
       
        if (currentNode.value === value && currentNode.text === text) this.head = currentNode.next
        if (currentNode.next?.value === value && currentNode.next.text === text) {
          if (currentNode.next.next) currentNode.next = currentNode.next.next;
          else {
          currentNode.next = null
          this.tail = currentNode;
          }
        console.log(currentNode);
        
        }
        
        // if (currentNode.next === null) {
        //   currentNode = null;
        //   console.log(currentNode);
        // }
        
        //if (currentNode?.next) currentNode = currentNode?.next;
        currentNode = currentNode.next
      }
      return this;
    }

    minusEmployer() {
      if (this.head?.value) {
        this.head = this.head.next as any;
      }
      //   const value = 0;
      //   if (!this.head) {
      //     return;
      //   }
      // //  let deletedNode = null;

      // while (this.head && this.head.value === value) {
      //   deletedNode = this.head;
      //   this.head = this.head.next;
      //   debugger;
      // }

      // let currentNode = this.head?.next;

      // if (currentNode !== null) {
      //   while (currentNode?.next) {
      //     debugger;
      //     if (currentNode.next.value === value) {
      //       deletedNode = currentNode.next;
      //       currentNode.next = currentNode.next.next;
      //     } else {
      //       currentNode = currentNode.next;
      //     }
      //   }
      // }
      // if (this.tail?.value === value) {
      //   this.tail = currentNode as any;
      // }
      return this;
    }

    bubbleSort() {
      //let currentNode = this.head as Node<K> | null; // ????????????????????????????????????????????????
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
            [currentNode.next.text, currentNode.text] = [
              currentNode.text,
              currentNode.next.text,
            ];
            inneTrigger = true;
          }

          currentNode = currentNode.next;
          console.log(trigger);
        }

        if (!inneTrigger) trigger = false;
        currentNode = this.head;
      }

      return this;
    }

    appendItem(value: K, text: any) {
      const newNode = new Node(value, text);

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
      const arrayOfNodes = [] as Array<K>; // return array of T
      let currentNode = this.head;

      while (currentNode) {
        arrayOfNodes.push(currentNode as K);
        currentNode = currentNode.next as Node<K>;
      }
      return arrayOfNodes;
    }
  }

  const [listOfElements, setListOfElements] = useState(new LinkedList());
  const [calc, setCalc] = useState(0);
  const [text, setText] = useState<string>(``);

  const textAreaChange = useCallback((textIn: any, textOld: any) => {
    setText(textIn + textOld.data);
  }, []);

  const minusEmployer = useCallback(() => {
    setListOfElements(listOfElements.minusEmployer() as any);
    setCalc(calc + 1);
  }, [setListOfElements, listOfElements, calc]);

  const deleteEmployer = useCallback(
    (value: number, text: string) => {
      listOfElements.deleteEmployer(value, text);
      //alert(`Emploer number ${value} with ${text} name is terminated`);
      setCalc(calc + 1);
    },
    [listOfElements, calc]
  );

  const bubbleSort = useCallback(() => {
    setListOfElements(listOfElements.bubbleSort());
    setCalc(calc + 1);
  }, [setListOfElements, listOfElements, calc]);

  const plusEmployer = useCallback(
    (text: any) => {
      setListOfElements(
        listOfElements.appendItem(generageRandomNumber(), text)
      );
      setText(``);
      setCalc(calc + 1);
    },
    [listOfElements, setCalc, calc]
  );

  const memoisedValue = useMemo(() => {
    return generageRandomNumber();
  }, []);

  const Updated = () => {
    return <div>{memoisedValue}</div>;
  };

  return (
    <>
      <div>
        <div>
          <Button variant="primary" onClick={minusEmployer}>
            - last Element
          </Button>
          Name of new employer
          <input
            value={text}
            onChange={(event) => {
              textAreaChange(text, event.nativeEvent);
            }}
          />
          <Button
            onClick={() => {
              plusEmployer(text);
            }}
          >
            + Element
          </Button>
          <Button
            onClick={() => {
              setText(``);
            }}
          >
            - CLEAR
          </Button>
          <Button
            onClick={() => {
              plusEmployer(getRandomName());
            }}
          >
            - RandomEmployer
          </Button>
        </div>
        <br></br>
        <div>
          <div id="main">
            <div className="tableMain">
              {listOfElements.toArray().map((element: any, key: number) => {
                return (
                  <div className="tableMain" key={key}>
                    <li key={key}>
                      <div>
                        <Alert variant={`secondary`}>
                          {JSON.stringify(element.value)}
                        </Alert>
                      </div>
                      <div>
                        <Alert variant={`dark`}>
                          {JSON.stringify(element.text)}
                          {/* {JSON.stringify(element)} in {key} */}
                        </Alert>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteEmployer(element.value, element.text);
                          }}
                        >
                          terminate
                        </Button>
                      </div>
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Button onClick={bubbleSort}>SORT List by bubble method</Button>
        <Updated />
      </div>
    </>
  );
};

export default LinkedlistApp;
