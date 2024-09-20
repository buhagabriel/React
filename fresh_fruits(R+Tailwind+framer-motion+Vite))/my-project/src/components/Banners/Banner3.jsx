import BanerPng from "../../assets/banner-bg.jpg";
import {motion} from "framer-motion"
import {FadeLeft } from "../../utility/animation";


const bgStyle ={
  backgroundImage:`url(${BanerPng})`,
  backgroundPostion:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
}

const Banner3 = () => {
  return (
<section className="container mb-12">
      <div  
      style={bgStyle}
      className="container grid grid-col-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
      {/* // Blank div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewName={{once:true}}
             className="text-3xl lg:text-4xl font-bold uppercase">
              {" "}
              get fresh fruits today
            </motion.h1>
            <motion.p
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >Lorem ipsum dolor sit amet consectetur, adipisicimg elit. Id nam obcaecati sequi odio dolore officia magni reicciendis, architecto
              eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime 
            </motion.p>

                {/* button section */}
                <motion.div 
                  variants={FadeLeft(0.9)}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center md:justify-start">
                    <button className="primary-btn"> 
                        Learn More!
                    </button>
                </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner3
