
'use client';
import {Canvas} from '@react-three/fiber';
import {Float, Sphere} from '@react-three/drei';
import {motion} from 'framer-motion';

export default function Hero(){
  return (
  <div style={{height:'100vh',position:'relative'}}>
    <Canvas style={{position:'absolute',inset:0}}>
      <ambientLight intensity={2}/>
      <Float speed={2}>
        <Sphere args={[1.5,64,64]}>
          <meshStandardMaterial wireframe />
        </Sphere>
      </Float>
    </Canvas>
    <motion.div initial={{opacity:0}} animate={{opacity:1}}
      style={{position:'relative',zIndex:2,textAlign:'center',paddingTop:'30vh'}}>
      <h1 style={{fontSize:'4rem'}}>Tejas R. Nikam</h1>
      <h2>Senior Data Scientist • PhD Candidate • Patent Inventor</h2>
      <p>AI • GenAI • FinTech • Research</p>
    </motion.div>
  </div>)
}
