import QuakesLister from '../QuakesLister/';
import * as fetchQuakes from '../../services/fetchQuakes';

import stubbedResponses from '../../../test/helpers/stubbedResponses';
import fakeSetState from '../../../test/helpers/fakeSetState';

let quakesLister;

describe('(Component) The Quakes Lister', () => {
  beforeEach(() => {
    quakesLister = new QuakesLister();
    jest.spyOn(quakesLister, 'setState').mockImplementation(fakeSetState).bind(quakesLister);
  });

  describe('(Scenario) before it loads', () => {
    test('it has an empty list of `quakes`', () => {
      expect(quakesLister.state.quakes).toEqual([]);
    });

    test('it is in a loading state', () => {
      quakesLister.componentWillMount();
      expect(quakesLister.state.loading).toBe(true);
    });
  });

  describe('(Scenario) when it loads', () => {
    beforeEach((done) => {
      jest.spyOn(fetchQuakes, 'default');
      quakesLister.componentDidMount();
      done();
    });

    test('it calls for earthquake data ', () => {
      expect(fetchQuakes.default).toBeCalled();
    });
  });

  describe('(Scenario) when the call for data is successful', () => {
    beforeEach((done) => {
      jest.spyOn(fetchQuakes, 'default').mockReturnValueOnce(stubbedResponses.success);
      quakesLister.componentDidMount();
      done();
    });

    test('it populates the list of `quakes` ', () => {
      expect(quakesLister.setState).toHaveBeenCalled();
    });
  });

  describe('(Scenario) when the call for data is unsuccessful', () => {
    beforeEach((done) => {
      jest.spyOn(fetchQuakes, 'default').mockReturnValueOnce(stubbedResponses.failure);
      quakesLister.componentDidMount();
      done();
    });

    test('it shows an error', () => {
      expect(quakesLister.state.error).toBe(true);
    });
  });
});
