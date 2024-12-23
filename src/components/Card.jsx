import React, {Component} from 'react';
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    downHandler = () => {
        if (this.state.count >= 1 ) {
            this.setState(prevState => ({
                count: prevState.count - 1,
            }))
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        const {count} = this.state
        const {image, name, price} = this.props
        return (
            <div className={styles.container}>
                <img src={image} alt="Smart Phone"/>
                <h3>{name}</h3>
                <p>{price} {count ? `* ${count} = ${count * Number(price.split(" ")[0])}`: ""}</p>
                <div className={styles.counter}>
                    <img className={!count && styles.deactive} src={down} alt="arrow-down" onClick={this.downHandler}/>
                    <span>{count}</span>
                    <img src={up} alt="arrow-up" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;