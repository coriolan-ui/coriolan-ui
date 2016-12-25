import ReactGA from 'react-ga';
ReactGA.initialize('UA-73758928-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
