import { Canvas } from "@react-three/fiber"
import { Modelo } from "./Modelo"
import { Environment, ScrollControls } from "@react-three/drei"


const Scene = () => {
  return (
    <Canvas 
    camera={{fov:50, position:[0,0,9]}}
    >
    <ScrollControls pages={6} damping={0.1}>
    <Modelo/>
    </ScrollControls>
    <pointLight position={[-1,7,1]} />
    <pointLight position={[-4,-3,2]} />

    </Canvas>
  )
}

export default Scene