import React, { useCallback, useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, InputGroup } from "react-bootstrap";

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
      `Daniel`,
      `Michael`,
      `Parfenon`,
      `Solomon`,
      `SiDzenPin`,
      `Yohan`,
      `Pikachu`,
      `Pokemon`,
      `Philimon`,
      `Tokio`,
      `Barel`,
      `Morti`,
      `Rik`,
      `Sandra`,
      `Arnold`,
      `Omega`,
      `Delta`,
    ];

    const generageRandomNumber = () => {
      return Math.floor(Math.random() * 20);
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

    binarySearch (element: string) {
      let arrayOfElements = []
      let q = 0
      let currentNode = this.head;

      while (currentNode) {
        arrayOfElements[q] = currentNode;
        currentNode = currentNode.next;
        q++
      }
      let mid = Math.floor(arrayOfElements.length / 2);
       while(arrayOfElements) {

      if(element == arrayOfElements[mid]?.value) {alert(`Goal! ${arrayOfElements[mid].text}`); return;}
      if(element > arrayOfElements[mid]?.value) {arrayOfElements = arrayOfElements.slice(mid);}
      if(element < arrayOfElements[mid]?.value) {arrayOfElements = arrayOfElements.slice(0, mid);}
      mid = Math.floor(arrayOfElements?.length / 2);
        }
    return this;
    }

    deleteEmployer(value: number, text: string) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value && currentNode.text === text)
          this.head = currentNode.next;
        if (
          currentNode.next?.value === value &&
          currentNode.next.text === text
        ) {
          if (currentNode.next.next) currentNode.next = currentNode.next.next;
          else {
            currentNode.next = null;
            this.tail = currentNode;
          }
        }

        currentNode = currentNode.next;
      }
      return this;
    }

    minusEmployer() {
      if (this.head?.value) {
        this.head = this.head.next as any;
      }

      return this;
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
            [currentNode.next.text, currentNode.text] = [
              currentNode.text,
              currentNode.next.text,
            ];
            inneTrigger = true;
          }

          currentNode = currentNode.next;
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
      const arrayOfNodes = [] as Array<K>;
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
  const [findIndex, setFindIndex] = useState<string>(``);

  const textAreaChange = useCallback((textIn: any, textOld: any) => {
    setText(textIn + textOld.data);
  }, []);

  const findeIndexChange = useCallback((textIn: any, textOld: any) => {
    setFindIndex(textIn + textOld.data);
  }, []);

  const minusEmployer = useCallback(() => {
    setListOfElements(listOfElements.minusEmployer() as any);
    setCalc(calc + 1);
  }, [setListOfElements, listOfElements, calc]);

  const deleteEmployer = useCallback(
    (value: number, text: string) => {
      listOfElements.deleteEmployer(value, text);
      setCalc(calc + 1);
    },
    [listOfElements, calc]
  );

  const bubbleSort = useCallback((element?: string) => {
    setListOfElements(listOfElements.bubbleSort());
    setCalc(calc + 1);

    if(element) {
      listOfElements.binarySearch(element);
    }

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
            + Emploer
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
                          ID - {JSON.stringify(element.value)}
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
        <Button onClick={() => {bubbleSort()}}>SORT List by bubble method</Button>
        <InputGroup />
        <input
          value={findIndex}
          onClick={() => {
            setFindIndex(``);
          }}
          onChange={(event) => {
            findeIndexChange(findIndex, event.nativeEvent);
          }}
        ></input>
        <Button
          onClick={() => {
            bubbleSort(findIndex);
          }}
        >
          Terminate emploeyr by ID
        </Button>
        <Updated />
      </div>
    </>
  );
};

export default LinkedlistApp;
