# Solution 1

## Running the app

```
cd solution-1
npm install
npm start
```


## Tests

Jasmine must be installed globally:

`npm install -g jasmine`

Run tests via `npm test`

### Unit test structure

Tests _describe_ `(Components)`, `(Scenarios)` and `(Methods)`.
The language in the _describes_ and _its_ follows the business language
as much as possible.

Nested _describes_ can be used to describe user journies.

e.g. 
```
|-(Component) App 
  |--(Scenario) When thing A happens
    |-- (Scenario) And then thing B happens
      |-- It does this thing
  |--(Scenario) When thing B happens
    |-- It does some other thing
```

---

[http://laurencelord.co.uk/sandbox/earthquake-solution-1/](http://laurencelord.co.uk/sandbox/earthquake-solution-1/)

---

More notes on both solution are in the README in the [root of this repo](https://github.com/LL782/earthquakes)