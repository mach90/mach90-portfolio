/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import styles from './Text3d.module.css';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
TEXT3D COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Text3d({primary, secondary}) {
    return (
        <div className={styles.textContainer}>
            <p className={styles.primary}>{primary}</p>
            <p className={styles.secondary}>{secondary}</p>
        </div>
    )
}

export default Text3d;