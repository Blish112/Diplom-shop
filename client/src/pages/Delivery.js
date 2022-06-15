import Container from 'react-bootstrap/Container'
import './css/main.css';
import del from './images/del.png';

const Delivery = () => {
    return (
        <Container>
            <h1>Информация о доставке товара.</h1>
            <div>
                <h4>Иструкция по заказу товара:</h4>
                <ol>
                    <li>Выбирите товар в разеле “Магазин”.</li>
                    <li>Добавьте товар в корзину.</li>
                    <li>В разделе “Корзина” укажите колиство товаров.</li>
                    <li>Заполните форму вашими данными.</li>
                    <li>Дождите звонка менеджера для потверждения заказа.</li>
                    <li>Выбирите способ оплаты.</li>
                </ol>
            </div>
            <div class="icons1">
            <img src={del} alt="BigCo Inc. logo"/>
            </div>
        </Container>
    )
}

export default Delivery;