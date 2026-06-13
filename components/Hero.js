'use client'
import {Canvas} from '@react-three/fiber'
import {Float,Sphere} from '@react-three/drei'
export default function Hero(){return <div className='h-screen relative'><Canvas className='absolute inset-0'><ambientLight intensity={2}/><Float><Sphere args={[1.5,64,64]}><meshStandardMaterial wireframe /></Sphere></Float></Canvas><div className='relative z-10 h-screen flex flex-col items-center justify-center'><h1>Tejas R. Nikam</h1><p>AI Researcher • Senior Data Scientist</p></div></div>}