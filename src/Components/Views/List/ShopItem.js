import styles from './ShopItem.module.css';

function ShopItem({item}) {
    return (
        <div className={styles.item}>
            <img src={item.img} className={styles.img}/>
            <h2 className={styles.name}>{item.name}</h2>
            <span className={styles.color}>{item.color}</span>
            <span className={styles.price}>${item.price}</span>
            <button className={styles.button}>ADD TO CARD</button>
        </div>
    );
}

export default ShopItem;
