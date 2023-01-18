import 'bulma/css/bulma.css';
import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                            title = "alexa"
                            handle = "@alexa99"
                            image = {AlexaImage}
                            description = "Alexa was created by Amazon which helps you buy things."/>
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                            title = "cortana" 
                            handle = "@cortana32" 
                            image = {CortanaImage}
                            description = "Cortana was created by Microsoft. Who knows what it does?"/>                           
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                            title = "siri" 
                            handle = "@siri01" 
                            image = {SiriImage}
                            description = "Siri was created by Apple and is being phased out."/>
                        </div>
                    </div>
                </section>
            </div>      
        </div>
    );
}
export default App;