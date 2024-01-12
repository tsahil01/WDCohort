# Async Await example:

- Consider this example of MongoDB in which we are creating two new users. ([createUser code](#reference-code-of-createuser-in-mongodb))
- I have wrapped everything in a printing function to provide a better understanding.

```javascript
function printing(){
    console.log("Hello 1");
    createUser("Jack@12", 23);
    console.log("Hello 2");
    createUser("Roman@12", 21);
    console.log("Hello 3");
}

printing();
```

#### Expected Output:

```js
Hello 1
{
  username: 'Jack@12',
  age: 23,
  _id: new ObjectId('65a0dff89381f125a4c5e10b'),
  __v: 0
}
Hello 2
{
  username: 'Roman@12',
  age: 21,
  _id: new ObjectId('65a0dff89381f125a4c5e10c'),
  __v: 0
}
Hello 3
```

#### Actual Output:
```js
Hello 1
Hello 2
Hello 3
{
  username: 'Jack@12',
  age: 23,
  _id: new ObjectId('65a0dff89381f125a4c5e10b'),
  __v: 0
}
{
  username: 'Roman@12',
  age: 21,
  _id: new ObjectId('65a0dff89381f125a4c5e10c'),
  __v: 0
}
```

- This is because `createUser()` is an async task. 
- So it will be taken care of by the WebAPI to get executed. 
- Till then, the JS thread can't be alone. So for that time, the remaining tasks will run, and when the WebAPI resolves, the output is displayed here.

<br>

#### To avoid this, we use Async and Await =>
```javascript
async function printing(){
    console.log("Hello 1");

    await createUser("Jack@12", 23);
    console.log("Hello 2");
    
    await createUser("Roman@12", 21);
    console.log("Hello 3");
}

printing();
```

#### Output:
```js
Hello 1
{
  username: 'Jack@12',
  age: 23,
  _id: new ObjectId('65a0dff89381f125a4c5e10b'),
  __v: 0
}
Hello 2
{
  username: 'Roman@12',
  age: 21,
  _id: new ObjectId('65a0dff89381f125a4c5e10c'),
  __v: 0
}
Hello 3
```

- Here, I made the `printing()` function completely async, and the `createUser()` is in an awaiting state until it gets the output. 
- This means the code will wait until we get the response of `createUser()` and then move to the next instructions.
<hr>
<br>
<hr>

#### Reference code of createUser in MongoDB:
```js
async function createUser(username, age){
    let newUser = await User.create({
        username,
        age
    })
    console.log(newUser)
}
```