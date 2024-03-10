import { FC } from 'react'

const Loading: FC = () => {
  const video = '../../../public/building.mp4'

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      poster="polina.jpg"
      id="bgvid"
      className="object-cover h-lvh w-full top-0 left-0"
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}

export default Loading
