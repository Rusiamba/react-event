import IconSwitch from "./IconSwitch";
import {useState} from "react";
import CardView from "./Views/Card/CardView";
import ListView from "./Views/List/ListView";
import styles from './Store.module.css';

function Store() {
    const products = [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];
    const [isCard, setCard] = useState(true);
    const [icon, setIcon] = useState('view_module');

    const onSwitch = (event) => {
        setCard(!isCard);
        isCard ? setIcon('view_list') : setIcon('view_module');
    }
    return (
        <div className={styles.wrapper}>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {isCard
                ? <CardView cards={products}/>
                : <ListView items={products}/>
            }
        </div>
    )
}

export default Store;
