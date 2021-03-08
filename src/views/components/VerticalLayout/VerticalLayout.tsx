import React from 'react';
import styles from './VerticalLayout.module.scss';

export default function VerticalLayout(props: any) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}