### Is Truthy

Write a function `isTruthy` that accepts a single argument of any type.

`isTruthy` should return true if that argument is 'truthy'.

If the value is 'falsey', log out one of the messages below, corresponding to
the type of the value tested.

```
'The boolean value false is falsey'
'The null value is falsey'
'undefined is falsey'
'The number 0 is falsey (the only falsey number)'
'The empty string is falsey (the only falsey string)'
```

```javascript
isTruthy("I yearn for truth"); // => true
isTruthy(null); // => The null value is falsey
```

function isTruthy(para) {
let allFalsyValues = {
"false": "The boolean value false is falsey",
"null": "The null value is falsey",
"undefined": "undefined is falsey",
"0": "The number 0 is falsey (the only falsey number)",
"": "The empty string is falsey (the only falsey string)",
};
return para ? true : console.log(allFalsyValues[String(para)]);
}

console.log(isTruthy("I yearn for truth")); // true
isTruthy(null); // The null value is falsey
