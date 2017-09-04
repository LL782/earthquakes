# Earthquake List

## The brief

- Create a react component that displays a list of places where earthquakes have happened.
- List should be filterable by `magnitude` or `magtype` of the earthquake. 
- If the filter does not return any items then display a message to say ‘not found’. 
- You should use React, ES6 and Redux if you think appropriate. 
- Create some (not necessary to unit test everything) tests to show the app works (using either Jasmine or Mocha). 
- Please provide two solutions if you can and the pros and cons of each approach.
- Do not worry about resetting the filters or styling. 
- Pay attention to reusing and composing components where possible.

Use the following endpoint:
https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02

The list items should display in the following format

`Id: place: mag: magType`

e.g.

```
- Ak10992887: 117km NW of Talkeetna, Alaska : 1.1 : ml
- Nc72134401 : 6km E of Mammoth Lakes, California : 0.6 : md
```

Create two inputs with buttons:

1. Text Input with button to filter by magnitude
2. Text Input with button to filter by magtype


## Notes on two approaches

### Solution 1

#### Setup

```
git clone https://github.com/LL782/earthquakes.git
cd solution-1
npm install
npm start
```

[Full instruction in the solution-1 directory](./tree/master/solution-1)


#### Intentions

Quick approach without too much concern for tooling and the 
structure of that app beyond the component itself.

- Use [Create React App](https://facebook.github.io/react/docs/installation.html) to get started quickly
- Use [TDD](https://technologyconversations.com/2014/09/30/test-driven-development-tdd/) 
 and an [XP](https://en.wikipedia.org/wiki/Extreme_programming) approach to fulfill the business logic as efficiently as possible.
- Don't worry about PropTypes (interesting talking point)


### Solution 2

#### Setup

```
git clone https://github.com/LL782/earthquakes.git
cd solution-2
npm install
npm run dist
```

[Full instruction in the solution-2 directory](./tree/master/solution-2)

#### Intention

A more carefully crafted app, some exploration into 
technology which is less familiar and more time setting up tooling to 
encourage best practice and consistent, high quality code.

- Configure Babel, Webpack and NPM scripts from scratch (don't use create-react-app)
- Incorporate tooling that encourages best practice (e.g. [eslint](eslint.org), [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) rules)
- (Try) [Jest](http://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for unit tests React components.

---

### Compare the two solutions

#### Differences between the components


##### Solution 1

`solution-1` has few component files and everything in one directory. It is especially quick and easy to ready and understand. However, the components are lacking [prop-types](https://www.npmjs.com/package/prop-types) and there are no linting rules in place to enforce code consistency.

I setup with [Create React App](https://github.com/facebookincubator/create-react-app) which gives a lot for free, such as an optimised build process, the service worker for caching files and hot reloading for speeding up development.


##### Solution 2
  
`solution-2` has each components in it's own directory with room for test files and other related files to be included along side them. The components have names like `QuakeList` and `QuakeListItem` so they wouldn't get lost if the Earth Quake lister was included with other UI features.

I setup without Create React App, for greater control and understanding of every aspect of the setup.

`eslint` with the `airbnb rules` ensure better code quality and consistency.


##### Both

Clear seperation between UI, business models, data services and config. 

Each component has it's own file.

All files are kept short and sweet with named functions and objects.

---

