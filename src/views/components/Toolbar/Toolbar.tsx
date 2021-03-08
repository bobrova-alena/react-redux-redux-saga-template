import styles from './Toolbar.module.scss';

export default function Toolbar(props: any){
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}