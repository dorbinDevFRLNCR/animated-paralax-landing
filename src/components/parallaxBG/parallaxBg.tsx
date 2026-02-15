import { useEffect, useRef } from 'react'

function ParallaxBg() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgThreeRef = useRef<HTMLDivElement>(null)
  const bgFourRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (bgThreeRef.current) {
        const speed = 0.4
        bgThreeRef.current.style.transform = `translateY(-${scrollY * speed}px) scale(${1 + scrollY * 0.001})`
      }

      if (bgFourRef.current) {
        const speed = 0.6
        bgFourRef.current.style.transform = `translateY(${scrollY * speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="parallax-container relative">
      <div className="bg-one z-999 absolute top-0 h-full w-full"></div>
      <div className="bg-two z-0 absolute top-0 h-full w-full"></div>
      <div ref={bgThreeRef} className="bg-three z-100 absolute top-100 h-full w-full"></div>
      <div
        ref={bgFourRef}
        className="bg-four z-150 absolute top-100 h-full w-full"
        style={{ willChange: 'transform' }}
      ></div>
      <div className="bg-five h-full w-full"></div>
    </div>
  )
}

export default ParallaxBg
