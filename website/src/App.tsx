import Silk from "./assets/Silk/Silk"

function App() {
  return (
    <div className="w-screen h-screen">
      <Silk
        speed={5}
        scale={1}
        color="#38b6ff"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  )
}

export default App
