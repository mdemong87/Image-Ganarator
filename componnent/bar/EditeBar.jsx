import styles from "../../styles/bar/EditeBar.module.css";

export default function EditeBar() {
    return (
        <div className={styles.berContainer}>
            <div className={styles.inputWrp}>
                <input type="text" placeholder="Discribe what your wnat to see with phrases and saparated them with commnd" />
            </div>
            <div className={styles.btnWrp}>
                <button>Ganarate</button>
            </div>
        </div>
    )
}
