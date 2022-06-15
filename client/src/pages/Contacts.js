import Container from 'react-bootstrap/Container'
import call from './images/call 1.png';
import feed from './images/feedback.png';
import vk from './images/vk 1.png';
import fake from './images/facebook.png';
import teleg from './images/telegram.png';
import what from './images/whatapp.png';
import './css/main.css';

const Contacts = () => {
    return (
        <Container>
            <h1>Контакты</h1>
            <h4> Для обратной свзявы вы можете позвонить нам по телефену или написать сообщения в социальных сетях.</h4>
            <div>
                <h4> Номера телефона менеджера:</h4>
                <div>
                <img src={call} alt="BigCo Inc. logo"/> +7 (228) 148 822
                </div>
                <h4> Номера телефона продовца:</h4>
                <div>
                <img src={call} alt="BigCo Inc. logo"/> +7 (322) 322 322
                </div>
                <h4> Наши социальные сети:</h4>
                <div class="media">
                    <div class="media_icons">
                        <div class="media_icon">
                        <img src={vk } alt="BigCo Inc. logo"/>
                        </div>
                        <div class="media_icon">
                        <img src={fake} alt="BigCo Inc. logo"/>
                        </div>
                        <div class="media_icon">
                        <img src={teleg} alt="BigCo Inc. logo"/>
                        </div>
                        <div class="media_icon">
                        <img src={what} alt="BigCo Inc. logo"/>
                    </div>
            </div>            
        </div>
            </div>
            <div class="icons2">
            <img src={feed} alt="BigCo Inc. logo"/>
            </div>
        </Container>
    )
}

export default Contacts