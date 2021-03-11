import React from 'react';
import styles from './BottomPanel.module.scss';
import Menu from '../Menu/Menu';

export default function BottomPanel(props: any){
    return (
        <div className={styles.container}>
            <Menu items={['item 1', 'item 2']}/>
        </div>
    );
}