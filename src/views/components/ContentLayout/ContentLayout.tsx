import React from 'react';
import styles from './ContentLayout.module.scss';

export default function ContentLayout(props: any) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}