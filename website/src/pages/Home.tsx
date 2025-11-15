import { useEffect, useId } from 'react'
import FaultyTerminal from '../components/FaultyTerminal'

export default function Home() {
  const titleId = useId()

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <main aria-labelledby={titleId} className="h-screen relative">
      <FaultyTerminal
        scale={2}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={.75}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#38B6FF"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={true}
        brightness={.5}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <img
          src="/techxwhite.avif"
          alt="TechX Logo"
          className="w-128 h-auto mb-4"
        />
        <p className="text-[var(--alice)] text-2xl font-semibold tracking-wide">
          Via ad Excellentiam
        </p>
      </div>
    </main>
  )
}