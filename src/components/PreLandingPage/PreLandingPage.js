
import sphere from './sphere.gif'
import lock from './lock.jpg'
import './PreLandingPage.css'

export default function PreLandingPage ({onRouteChange}) {

    return (
        <div className="flex-container">
            <div className="flex-item">
                <a onClick={() => onRouteChange('landingPage')}><img className='gif'  src={lock} alt='loading'/>
                <p className="gifText">ultra</p></a>
            </div>
        </div>
                
  
    )
}