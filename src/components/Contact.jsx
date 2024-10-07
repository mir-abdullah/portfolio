import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {

  const [form,setForm] =useState({
    name:'',
    email:'',
    message:'',

  })
  const [loading,setLoading] =useState(false)
  const formRef = useRef(null)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})

  }
  //template_gjmbe3d
  //service_awujsrh
  //27waJUBmEiDI2cBwJ
  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_awujsrh","template_3qoptvt",
      {
        from_name:form.name,
        t0_name:"Mir Abdullah",
        from_email:form.email,
        to_email:"mirabdullah04@gmail.com",
        message:form.message

      },
      "27waJUBmEiDI2cBwJ"


    ).then(()=>{
      setLoading(false)
      alert("Thank you,I will get back to you as soon as possible")
      setForm({
        name:'',
        email:'',
        message:''
        })
    },(error)=>{
      setLoading(false)
      console.log(error)
      alert("Something went wrong ")
      
    })

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left','tween' ,0.2,1)}
      className='flex-[0.75] bg-black-100 p-8'>
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-8 mt-12'>
          <label className='flex flex-col'>
            <span className='text-white'>Your Name</span>
            
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>

          </label>
          <label className='flex flex-col'>
            <span className='text-white'>Your Email</span>
            
            <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>

          </label>
          <label className='flex flex-col'>
            <span className='text-white'>Your Message</span>
            
            <textarea
            rows="7"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outlined-none border-none font-medium'
            >
            </textarea>

          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit
          text-white font-bold shadow-md shadow-primary rounded-xl '>
            {loading? "Sending.." :"Send"}
          </button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right','tween' ,0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact");