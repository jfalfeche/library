const Loader = () => {
  const video = '/building.mp4'

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

export default Loader
