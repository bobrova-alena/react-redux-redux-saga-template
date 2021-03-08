import styles from './Menu.module.scss';

type MenuProps = {
    items: Array<string>;//object
}

export default function Menu(props: MenuProps){
    return (
        <div className={styles.container}>
            {props.items.map((item, index) => 
                <div key={index} className={styles.itemContainer}>
                    <div className={styles.itemImage}></div>
                    <div className={styles.itemTitle}></div>
                </div>)}
        </div>
    );
}