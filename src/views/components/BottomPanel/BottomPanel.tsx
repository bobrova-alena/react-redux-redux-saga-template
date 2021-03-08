import React from 'react';
import styles from './BottomPanel.module.scss';

export default function BottomPanel(props: any){
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}