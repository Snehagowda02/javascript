## Fetch

fetch runs in priority queue

fetch() promise **rejects only when a network error** occured all other times -- resolve will come
**.then() -- must check the response.ok or response.status**

### JS Engine

it have **memory Heap** and **Call stack** { Global Execution COntext, functions }

Function call goes to WebAPI

### Web API 

suppose the function is setTimeout() -- Register CALL BACK -- task queue

Suppose the function is fetch() -- **Priority queue [Micro task queue]**

### Fetch working
response = fetch('url', { headers, body})

1. memory -- these are private feilds
   * data
    * onFulfilled[ ]- resolve
    * OnRejection[ ] - reject

2. browser/ node api request
    * network request
    * request goes to network -- resolve onfulfilled[ ]
        * doesn't go --- onRejection[ ]


