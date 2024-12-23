import React, {Component} from 'react';

import styles from "./Cards.module.css";
import Card from "./Card.jsx";
import iphone13 from "../images/iphone13.webp";
import iphone14 from "../images/iphone 15.jpg";
import iphone16 from "../images/iphone16.webp";
import s21 from "../images/s21.jpg";


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphone13} name="Iphone 13" price="900 $"/>
                <Card image={iphone14} name="Iphone 14" price="1200 $"/>
                <Card image={iphone16} name="Iphone 16 ProMax" price="1800 $"/>
                <Card image={s21} name="S21 Ultra" price="790 $"/>
            </div>
        );
    }
}

export default Cards;