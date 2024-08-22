import React, { useRef, useEffect } from "react"
import { motion, useInView, useAnimation, useScroll } from "framer-motion"

export const AnimationX = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div ref={ref} className="">
      <span
        className="block -translate-x-1/2 opacity-0 relative z-40"
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.5, 0.5, 1) 0.4s",
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}

export const AnimationXInverse = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div ref={ref}>
      <span
        className="block translate-x-1/2 opacity-0 relative z-40"
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.5, 0.5, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}

export const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export const Opacity = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.5 }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  )
}

export const ScrollAnimation = ({ children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className="relative z-40 h-full"
    >
      {children}
    </motion.div>
  )
}

export const NavAnimation = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div ref={ref}>
      <span
        className="block translate-y-1/2 opacity-0 overflow-hidden"
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.4, 0.4, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}

export const ScrollXAnimation = ({ children }) => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollXProgress }}
      className="relative z-40 h-full"
    >
      {children}
    </motion.div>
  )
}
