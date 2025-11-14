import Silk from "./assets/Silk/Silk"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center relative bg-black">
      <Silk
        speed={5}
        scale={1}
        color="#38b6ff"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img
          src="/newtechxwhite.png"
          alt="TechX Logo"
          className="w-[447px] h-[150px] pointer-events-none select-none drop-shadow-[0_0_32px_rgba(255,255,255,0.7)]"
          style={{ filter: 'drop-shadow(0 0 32px rgba(255,255,255,0.7))' }}
          draggable="false"
        />
        <span className="text-white text-lg font-light mt-2 tracking-wide opacity-80 select-none" style={{textShadow: '0 0 8px rgba(255,255,255,0.5)'}}>via ad excellentiam</span>
      </div>
    </div>
  )
}

export default App
