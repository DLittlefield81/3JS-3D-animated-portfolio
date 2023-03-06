import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7x1 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Dennis</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a MERN Full Stack Developer graduate from the University of Toronto. I'm an experienced problem-solver with an eye for process improvement and an unwavering dedication to optimizing productivity and efficiency. I'm passionate about technology and continuously work to stay at the forefront of new and emerging trends.
            </p>
          </div>
        </div>
      </div>
          <ComputersCanvas/>
    </section>
  )
}

export default Hero