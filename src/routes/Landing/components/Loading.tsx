import { FC } from 'react'
import './styles.css'

const Loading: FC = () => {
  const video = '../../../../public/building.mp4'

  return (
    <div>
      <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Loading
