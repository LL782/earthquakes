import 'isomorphic-fetch';
import fetchQuakes from './fetchQuakes';
import routes from '../config/routes';


describe('(Method) Fetch Quakes', () => {
  test('returns the promise of data from the quakes endpoint', () => {
    jest.spyOn(global, 'fetch');

    const data = fetchQuakes();

    expect(global.fetch).toHaveBeenCalledWith(routes.quakesEndpoint);
    expect(data.then).toBeTruthy();
  });
});
