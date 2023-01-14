import React from 'react'
import './Detail.css'

export default function ExerciseVideos({ exerciseVideos, name }) {
  return (
    <div className='ytVideo-main'>
      <h2>Watch <span style={{ color: 'rgb(250, 72, 102)' }}>{name}</span> exercise videos</h2>
      <div className='ytVideo'>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            
            <h5>{item.video.title}</h5>
            <h6>{item.video.channelName}</h6>

            </a>))}
          </div>
    </div>
      )
}
