import React from 'react';
import styles from './styles.module.css';

const Alert = ({ message }) => {
    return (<div className={styles.loadingContainer}>
        <div className={styles.loadingIcon}></div>
        <div className={styles.AlertloadingText}><p>{message}</p></div>
    </div>)
}

export default Alert