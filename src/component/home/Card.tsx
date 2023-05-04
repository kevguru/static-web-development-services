import React from 'react'
import '../../styles/home/Card.css'

const Card = () => {
return(
  <section className="cards">
<div className="card">
  <h3 className="card__title">Professional Web Development Services for Your Business</h3>
  <span className="card__span">Description: Our team of experienced developers specializes in creating stunning and functional websites, landing pages, and mobile applications using the latest technologies.</span>
  <button className="card__button">View More</button>
</div>
<div className="card">
  <h3 className="card__title"> Immersive VR Development Services for Engaging Experiences</h3>
  <span className="card__span">Want to take your business to the next level with immersive virtual reality experiences? Our team can help you create interactive 3D environments that captivate your audience and provide them with engaging content.</span>
  <button className="card__button">View More</button>
</div>
  </section>
)
}

export default Card;