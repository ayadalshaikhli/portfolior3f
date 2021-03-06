/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/wall.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plane002" position={[0, 0.69, -12.01]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials.WALL} />
          <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={materials.FLOOR} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.FLOOR} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials.WATER} position={[0, 0.01, 0]} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.WALL} position={[0, 0, -7.83]} scale={0.69} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.WALL} position={[-7.62, 0, -13.11]} scale={0.69} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.WALL} position={[0, 0.59, -6.35]} scale={0.69} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.WALL} position={[-26.14, 1.29, -11.58]} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.WALL} position={[0, 0, -43.55]} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials.WALL} position={[0, 6.23, 17.73]} scale={0.69} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.WALL} position={[0, 8.2, -36.38]} />
      </group>
    </group>
  )
}

useGLTF.preload('/wall.glb')
