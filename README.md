GitHub Explorer
===============

This is examples/real-world from [react-redux](https://github.com/reactjs/redux)
combined with
[redux-infinite-scroll](https://github.com/RealScout/redux-infinite-scroll),
deployed as a GitHub pages app. You can play with it
[here](https://jstafford.github.io/github-explorer/).

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

The "real-world" example is described as follows in the React docs:

> This is the most advanced example. It is dense by design. It covers keeping
> fetched entities in a normalized cache, implementing a custom middleware for
> API calls, rendering partially loaded data, pagination, caching responses,
> displaying error messages, and routing. Additionally, it includes Redux
> DevTools.

The example was modified in the following ways:
 * Used yarn instead of npm for everything
 * Updated all dependencies to the latest versions
 * Modified the middleware to pass the latest GitHub api version
 * Switched from a paging list to a new infinitely scrolling list component
 based on
 [redux-infinite-scroll](https://github.com/RealScout/redux-infinite-scroll)
 by RealScout.
 * Support for react-router gained by following the instructions in the
 react-scripts README at [Notes on client-side
 routing](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing)
 and copying in code from
 [spa-github-pages](https://github.com/rafrex/spa-github-pages)

For a guide on how to perform find some common tasks specific to apps built
with Create React App, see the [react-scripts
README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
