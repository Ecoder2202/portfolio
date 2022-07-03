import React from 'react'
import CV from "../imge/CORE_CV_template_2.doc"

const Cta = () => {
  return (
    <div className='cta'> 
        <a href = {CV} download className='btn'>Download</a>
        <a href= '#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta