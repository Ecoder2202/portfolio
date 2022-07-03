import React from 'react'
import './About.css'
import ME from '../imge/Catoonface.png.jpeg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {AiFillFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
<h5>Get to know </h5>
<h2>About me</h2>

<div className='container about_container'>
  <div className='about_me'>
  <div className='about_me-image'>


  <img src={ME} alt= 'About image '/>
  </div>
   </div>

   <div className='about_content'>
<div className='about_cards'> 
  
    <article className='about_card'>
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>3+ Years Working </small>

    </article>  
  
 
<article className='about_card'>
<AiOutlineUsergroupAdd className='about_icon'/>
<h5>clients</h5>
<small>300+ WorldWide </small>

</article>  


<article className='about_card'>
<AiFillFolderAdd className='about_icon'/>
<h5>project</h5>
<small>80+ completed projects </small>

</article>  
</div>
<p> lorem Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ... </p>
<a className='btn  btn-primary' href=''>Let's talk</a>
</div>



</div>
    </section>
  )
};

export default About