import {motion} from "framer-motion"
import { useState } from "react"

const Test = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    visible: {opacity:1, x:400, transition:{type:"spring", stiffness:200000000, damping:20}},
    hidden: {opacity:0}
  }

  return (
    <div className="course">
        <motion.div 
        className="box" 
        variants={variants}
        animate={open ? "visible" : "hidden"}
         />
        <button onClick={() => setOpen(prev =>!prev)}>Click</button>
    </div>
  )
}

export default Test