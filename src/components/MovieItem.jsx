import React from 'react'

const MovieItem = ({mike}) => {
  return (
    <div>
      <div>
            <img src={mike.snippet.thumbnails.medium.url} alt="" />
            <h1>{mike.snippet.title}</h1>
            </div>

            <div>
              <p>{mike.snippet.description.slice(0,50)}</p>

            </div>
            </div>
  )
}

export default MovieItem
