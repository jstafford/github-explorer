import React, { Component, PropTypes } from 'react'
import ReduxInfiniteScroll from 'redux-infinite-scroll';

export default class InfiniteList extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    loadMoreCallback: PropTypes.func.isRequired,
    nextPageUrl: PropTypes.string
  }

  static defaultProps = {
    isFetching: true,
    loadingLabel: 'Loading...'
  }

  loadMoreIfPossible() {
    const { nextPageUrl, loadMoreCallback } = this.props

    if (nextPageUrl) {
      loadMoreCallback()
    } else {

    }
  }

  render() {
    const {
      items, isFetching, loadingLabel,
      nextPageUrl,
      loadMoreCallback, renderItem,
    } = this.props

    const isEmpty = items.length === 0
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    const isLastPage = !nextPageUrl
    if (isEmpty && isLastPage) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <ReduxInfiniteScroll
        loadingMore={isFetching}
        hasMore={!!nextPageUrl}
        loadMore={loadMoreCallback}
        elementIsScrollable={false}
      >
        {items.map(renderItem)}
      </ReduxInfiniteScroll>
    )
  }
}
