import { Level } from "../../type/level";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage } alt="Icon" width={30}/>
            </div>
            <div className={styles.gridtitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC: <strong>{item.yourImc}</strong> 
                </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre: <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}