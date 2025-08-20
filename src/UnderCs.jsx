import './UnderCs.css'
import DarkVeil from './bg'

export default function UnderCs(){
    return(
        <div className="underCs-container">
            <DarkVeil className="underCs-bg" />
            
            <div className="underCs-text">
                <h1 className="underCs-title color">Coming Soon</h1>
                <h3 className="underCs-subtitle color">
                    An amazing site is coming to this web address. Check back soon
                </h3>
            </div>
        </div>
    )
}
