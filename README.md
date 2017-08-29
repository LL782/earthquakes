# Earthquake List - Technical exercise (WIP)

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

The list should display: 

Id: place: mag: magType .eg

```
- Ak10992887: 117km NW of Talkeetna, Alaska : 1.1 : ml
- Nc72134401 : 6km E of Mammoth Lakes, California : 0.6 : md
```

Create two inputs with buttons:

1. Text Input with button to filter by magnitude
2. Text Input with button to filter by magtype


## Notes on approach taken

### Solution 1

A quick solution taking the path of least resistance,
i.e. using know technologies and third party utils

- Use [Create React App](https://facebook.github.io/react/docs/installation.html) to get started 
- Use [TDD](https://technologyconversations.com/2014/09/30/test-driven-development-tdd/) 
 and an [XP](https://en.wikipedia.org/wiki/Extreme_programming) approach to fulfill the 
 business logic as efficiently as possible.

 