import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> The skills i have </h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
<h3>Frontend Development</h3>
<div className='experience_content'>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>HTml</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>CSS</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>BOOTSTRAP</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>JAVASCRIPT</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>REACT JS</h4>
<small className='text-light'>Experience</small>
  </article>
</div>
        </div>
        {/* ===============BACKEND DEVELOPMENT======================= */}
        <div className='experience_backend'>
        <article className='experience_details'>
<BsPatchCheckFill />
<h4>NODE JS</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>PHP</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>PYTHON</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>C#</h4>
<small className='text-light'>Experience</small>
  </article>
  <article className='experience_details'>
<BsPatchCheckFill />
<h4>MONGO DB</h4>
<small className='text-light'>Experience</small>
  </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
