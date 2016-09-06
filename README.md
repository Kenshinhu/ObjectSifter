---
javascript object and json object Sifter Tools

Quickly sifter Your response's Object;
-------------
#### Inatall:  
```bash
  npm install object-sifter
```

## Getting Started

#### Example
```
  var __ = require('object-sifter');
  var schema1 = {
  objectId:"",
  username:"",
  isdisplay:"",
  fee:"",
  book:{
    name:"",
    author:{name:""}
    }
  };
  
  var source1 = {
  objectId: "57cc4fea2e958a0068e382b9",
  username:"user001",
  isdisplay:true,
  book:[
  {
      "objectId": "57cc4fea2e958a0068e382b9",
      "name":"book 01",
      "createdAt": "2016-09-04T16:46:34.860Z",
      author:{
        name:"K.kenny.G",
        call:"mr"
      }
    }
  ],
  createdAt : "2016-09-04T16:46:34.860Z"
};

  var result = sifter(source1,schema1);
  // json or object had sifter from schema
  // result = {objectId:"57cc4fea2e958a0068e382b9",username:"user001",isdisplay:true,book:[{name:"book 01",author:{name:"K.kenny.G",}}]};

```
