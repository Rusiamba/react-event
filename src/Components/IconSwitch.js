import styles from './IconSwithc.module.css';

function IconSwitch({icon, onSwitch}) {
    return (
        <button className={styles.button} onClick={onSwitch}>
              <span className="material-icons">{icon}</span>
        </button>
    );
}

export default IconSwitch;
