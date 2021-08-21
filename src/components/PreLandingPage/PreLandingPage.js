
import sphere from './sphere.gif'
import './PreLandingPage.css'

export default function PreLandingPage ({onRouteChange}) {

    return (
        <div className="flex-container">
            <div className="flex-item">
                <a onClick={() => onRouteChange('landingPage')}><img className='gif'  src={sphere} alt='loading'/>
                <p className="gifText">ultra</p></a>
            </div>
        </div>
                
  
    )
}