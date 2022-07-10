import React, { useRef, useState, useMemo } from "react"
import {
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber"

const Diamond = () => {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props} // This 'props' will be passed down from App
      ref={mesh}
      
    >
      <dodecahedronBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={color}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <React.Fragment>
      <Diamond />
    </React.Fragment>
  )
}