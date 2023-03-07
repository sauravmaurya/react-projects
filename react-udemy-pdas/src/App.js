import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Personal digital assistants
                    </p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="alexa"
                            handle="@alexa99"
                            img={AlexaImg}
                            description="Alexa is an AI built by amazon and its pretty smart" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="cortana" 
                            handle="@cortana32" 
                            img={CortanaImg} 
                            description="Cortana is an AI built by microsoft and its not smart" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="siri" 
                            handle="@siri01" 
                            img={SiriImg}
                            description="Siri is an AI built by apple and its somehow smart" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;