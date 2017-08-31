import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import App from './App';

let component;

const endpoint = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

const stubbedData = {
  "features": [
    {
      "id": "ci11408890",
      "properties": {
        "place": "10km SSW of Idyllwild, CA",
        "mag": "1.29",
        "magType": "ml"
      }
    },
    {
      "id": "nc72134466",
      "properties": {
        "place": "4km NW of The Geysers, California",
        "mag": "0.53",
        "magType": "md"
      }
    }  
  ]
};

const stubbedResponse = new Promise((resolve) => {
  resolve({
    json: () => new Promise(resolve => {
      resolve(stubbedData);
    }) 
  });
})

const formatted = [
  {
    id: 'ci11408890',
    place: '10km SSW of Idyllwild, CA',
    mag: '1.29',
    magType : 'ml'
  },
  {
    id: 'nc72134466',
    place: '4km NW of The Geysers, California',
    mag: '0.53',
    magType : 'md'
  }
];

describe('(Component) App', () => {

  beforeEach(() => {
    component = new App();
  });

  describe('(Scenario) before the component is loaded', () => {

    it('has an empty list of quakes', () => {
      expect(component.state).toEqual({ quakes: [] });
    });

  });

  describe('(Scenario) when the component is loaded', () => {

    beforeEach((done) => {
      spyOn(global, 'fetch').and.returnValue(stubbedResponse);
      spyOn(component, 'setState').and.callFake((newState) => {
        component.state = newState;
      });

      component.componentDidMount();
      done();
    });

    it('calls the earthquake API', () => {
      expect(global.fetch).toHaveBeenCalledWith(endpoint);
    });

    it('populates the list of quakes', () => {
      expect(component.state.quakes).toEqual(formatted);
    });

  });
});


