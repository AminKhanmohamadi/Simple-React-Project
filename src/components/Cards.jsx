import React, {Component} from 'react';

import {v4} from "uuid";
import styles from "./Cards.module.css";
import Card from "./Card.jsx";
import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";


class Cards extends Component {
    constructor() {
        super();
        this.state = {
            phoneData : [
                {image:iphone10 , name:"Iphone X" , price:"500 $"},
                {image:iphone11 , name:"Iphone 11" , price:"600 $"},
                {image:iphone12 , name:"Iphone 12" , price:"800 $"},
                {image:s21 , name:"S21 Ultra" , price:"790 $"}
            ]
        }
    }
    render() {
        const {phoneData} = this.state;
        return (
            <div className={styles.container}>

                {phoneData.map(phone => <Card key={v4()} image={phone.image} name={phone.name} price={phone.price}/>)}



                {/*<Card image={iphone10} name="Iphone X" price="500 $"/>*/}
                {/*<Card image={iphone11} name="Iphone 11" price="600 $"/>*/}
                {/*<Card image={iphone12} name="Iphone 12" price="800 $"/>*/}
                {/*<Card image={s21} name="S21 Ultra" price="790 $"/>*/}
            </div>
        );
    }
}

export default Cards;