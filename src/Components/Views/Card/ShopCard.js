import styles from './ShopCard.module.css';

function ShopCard({card}) {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{card.name}</h2>
            <div className={styles.color}>{card.color}</div>
            <img src={card.img} className={styles.img}/>
            <footer className={styles.footer}>
                <span className={styles.price}>${card.price}</span>
                <button className={styles.button}>ADD TO CARD</button>
            </footer>
        </div>
    );
}

export default ShopCard;
