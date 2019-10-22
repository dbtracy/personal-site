import React, { Component } from 'react'

import './Writing.css'

export default class Writing extends Component {
  render() {
    return (
      <div>
        <h1>Check out my writing!</h1>
        <div className="article-list">
          <a className="spec-project" href="https://medium.com/@daniel.benjamin.tracy/resolving-cors-conflicts-with-the-arcgis-javascript-api-30b35e6b762a?source=your_stories_page---------------------------">Resolving CORS Conflicts with the ArcGIS JavaScript API</a>
          <a className="spec-project" href="https://medium.com/@daniel.benjamin.tracy/origins-origin-story-the-history-of-web-content-origin-733d76a8f8fd?source=your_stories_page---------------------------">Origin's Origin Story: the History of Web Content Origin</a>
          <a className="spec-project" href="https://medium.com/@daniel.benjamin.tracy/why-you-yes-you-should-learn-to-code-6969cb27c357?source=your_stories_page---------------------------">Why You (yes, you) Should Learn to Code</a>
        </div>
      </div>
    )
  }
}
