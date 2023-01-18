import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useControls } from 'leva'
import {
  CubeCamera,
  Environment,
  Html,
  MeshReflectorMaterial,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
  Text,
  ScrollControls,
  Scroll,
  Image as ImageImpl,
  useScroll,
  useTexture,
  MeshDistortMaterial, ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import { LayerMaterial, Depth, Noise, Fresnel } from "lamina";
import Noodles from "./Noodles";

const Lights = () => {
  return (
    <>

      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={0.1}
        position={[0, 5, 30]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={[7, 3.45, .1]}

      />
      <spotLight
        color={[7, 3.45, .2]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[20, 150, -20.83]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[7, 3.45, .2]}
        intensity={1}
        angle={0.6}
        penumbra={0.5}
        position={[0, 1230, -50.83]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};




const Model = ({ ...props }) => {
  const group = useRef()
  const cam = useRef()
  const sidewall1 = useRef()
  const sidewall2 = useRef()
  const frontwall = useRef()
  const sidewall3 = useRef()
  const sidewall4 = useRef()
  // const ref = useRef()

  const { nodes, materials, animations } = useGLTF('/wall.glb')

  console.log(animations);
  // const boxOne = useRef();
  // const boxTwo = useRef();
  // const boxThree = useRef();
  // const texture = useTexture('/rainbow.png')

  // const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })
  // useFrame((state) => (boxOne.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI,
  // boxTwo.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 4) * Math.PI)
  // )

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: ".wrap",

  //     scrub: 5,
  //     start: "top top",
  //     end: "bottom bottom",
  //     onUpdate: (self) => {


  //       group.current.position.z = -5 * Math.PI * self.progress;
  //       cam.current.position.z = -90 * Math.PI * self.progress;
  //       // frontwall.current.position.y = 55  * self.progress;

  //       // sidewall1.current.scale.x = 0 * self.progress;
  //       // cup.current.rotation.z = -2 * Math.PI * self.progress;
  //       // cup.current.position.y = -17 * self.progress;
  //       // cup.current.position.y = -2 * self.progress;
  //     },
  //   });
  // }, [])

  // useFrame(() => {

  //   boxOne.current.rotation.y += 0.03;
  //   boxTwo.current.rotation.y += 0.05;
  //   boxThree.current.rotation.y += 0.02;
  // });
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Plane002" position={[0, 0.69, -13.01]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials.WALL} />
            <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={materials.FLOOR} />
          </group>
          <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.FLOOR} />
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials.WATER} position={[0, 0.01, 0]} >

          </mesh>
          <mesh ref={sidewall1} name="Cube003" geometry={nodes.Cube003.geometry} material={materials.WALL} position={[0, 0, -7.83]} scale={0.69} >

          </mesh>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.WALL} position={[-7.62, 0, -13.11]} scale={0.69} />
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.WALL} position={[0, 0.59, -6.35]} scale={0.69} />
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.WALL} position={[-26.14, 1.29, -11.58]} />
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.WALL} position={[0, 0, -43.55]} />
          <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials.WALL} position={[0, 6.23, 7.73]} scale={0.69} />
          <mesh ref={frontwall} name="Cube001" geometry={nodes.Cube001.geometry} material={materials.WALL} position={[0, 8.2, -36.38]} />
        </group>
      </group>
      <group
        ref={cam}
        name="Camera"
        position={[0, -3, -3]}
        rotation={[0, 0, 0]}
      >
        <PerspectiveCamera makeDefault fov={25} position={[0, 4, 30]}>
          {/* <directionalLight
        position={[300, 130, 15]}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-left={-8}
        shadow-camera-bottom={-8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        intensity={15.5}
        shadow-bias={-0.0001}
       
      /> */}
        </PerspectiveCamera>
      </group>
    </>
  )
}

useGLTF.preload('/cube.glb')


const AnimatedMaterial = a(MeshDistortMaterial)
function Scene({ setBg }) {
  const sphere = useRef()
  const light = useRef()
  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
      )}'), auto`
  }, [hovered])

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
  })

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#E8B059' : mode ? '#202020' : 'white',
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  )

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false)
            // Toggle mode between dark and bright
            setMode(!mode)
            setBg({ background: !mode ? '#202020' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
          }}>
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
        </a.mesh>
        <Environment preset="night" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  )
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}
export default function Hero() {
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])

  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          overflow: "hidden",
          zIndex: 0,
          background: "#0E1012"

        }}
        id="main-canvas"
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{ position: [0, 0, 10], fov: 22 }}
      >

        <Lights />
        <Noodles />
        <Caption>{`HELLO\nIM AYAD\nFULL STACK\nWEB-DEVELOPER.`}</Caption>
        <Rig />
        {/* <Bg /> */}
        {/* <Model/> */}

      </Canvas>
    </>
  );
}