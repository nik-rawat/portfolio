import "./hero.scss"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition : {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer" variants = {textVariants}>
          <h2>Nikhil Rawat</h2>
          <h1>Web Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="./scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">
        Developer Graphics Designer
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero