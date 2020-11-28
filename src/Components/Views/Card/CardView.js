import styles from './CardView.module.css';
import ShopCard from "./ShopCard";

function CardView(props) {
    const cards = props.cards.map((e,i) => <ShopCard key={i} card={e}/>)
    return (
        <div className={styles.wrapper}>{cards}</div>
    );
}

export default CardView;
