import "./section.css"
import image from "../../images/logo.png"
import image2 from "../../images/bckgrnd.png"
import image3 from "../../images/topp.png"
import image4 from "../../images/bottomp.png"
import image5 from "../../images/Frame 16.png"
import devfQ from '../../images/devestQuestion.png'

function Section()
{

  return (
    <div className='second-section'>
      <div className='Container-home'>
        <div className='image-container-section'>
          <div className='image-container first-image'>
          <img className="image-top" src={image3}/>
            <img className="image-original rotating imagess" src={image}/>
            <img className="image-background imagess" src={image2}/>
            <img className="image-bottom" src={image4}/>
          </div>
        </div>
        <div className='text-container-section' >
          <div className='section-title'>
            <div className="whatis">
            <h1>What is</h1>
            <span className="devfestTarget" >
              <img src={devfQ} alt="" />
            </span>
            </div>
            
          </div>
          <div className='description-container-section'>
              DevFest: Annual GDG-powered tech celebration uniting developers worldwide. Explore
              cutting-edge trends, connect with industry experts, and ignite innovation in a collaborative
              environment. Join workshops, hackathons, and talks for a dynamic dive into the ever-
              evolving tech landscape.
          </div>
        </div>
      </div>
      <div className='Container-home'>
        <div className='image-container-section'>
          <div className='image-container first-image '>
            <img className="image-original scnd" id="scnd" src={image5}/>
            
          </div>
        </div>
        <div className='text-container-section'>
          <div className='section-title'>
            <h1>Who we are <span>?</span></h1>
          </div>
          <div className='description-container-section'>
          Google Developer Groups are community-driven groups that are aimed at bringing developers together to discuss and work on various Google technologies. These groups are typically run by volunteers and can be found in different cities around the world. GDGs organize events such as meetups, workshops, and hackathons, providing a platform for developers to learn

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
