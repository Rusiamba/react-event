import styles from "../List/ListView.module.css";
import ShopItem from "./ShopItem";

function ListView(props) {
    const items = props.items.map((e,i) => <ShopItem key={i} item={e}/>)
    return (
        <div className={styles.wrapper}>{items}</div>
    );
}

export default ListView;
