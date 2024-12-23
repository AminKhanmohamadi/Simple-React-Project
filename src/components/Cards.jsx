import React, {Component} from 'react';

import styles from "./Cards.module.css";
import Card from "./Card.jsx";
import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphone10} name="Iphone X" price="500 $"/>
                <Card image={iphone11} name="Iphone 11" price="600 $"/>
                <Card image={iphone12} name="Iphone 12" price="800 $"/>
                <Card image={s21} name="S21 Ultra" price="790 $"/>
            </div>
        );
    }
}

export default Cards;