# super-grouper #

Produce nested lookup tables with ease!

## Usage ##

```javascript
const super_grouper = require('super-grouper');

// Create a 2-level lookup
const sg = super_grouper(["first_name", "last_name"]);


// Add one item at a time...
sg.add({
  first_name: "Bob",
  last_name: "Dole",
  age: 1002,
});


// Add several items at once
sg.addAll([
  {
    first_name: "Bob",
    last_name: "Ross",
    age: 52,
  },
  {
    first_name: "Michael",
    last_name: "Bolten",
    age: 35,
  },
  {
    first_name: "Michael",
    last_name: "Bolten",
    age: 52,
  }
]);


// Construct the lookup table based upon the inputs
const lookup = sg.getResult();



// Get all people named "Michael Bolten"
const michaelBoltens = lookup["Michael"]["Bolten"];


// Pretty-print the result
console.log(JSON.stringify(michaelBoltens, null, 2));
```
