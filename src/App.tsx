import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrow from './assets/leftarrow.png';
import { levels, calculateIMC } from './helpers/imc'
import { GridItem } from './components/GridItem';
import { Level } from './type/level';

function App() {

  const [heigthField, setHeigthField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handlerCalculateButton = () => {
    if (!heigthField) {
      alert('Por favor, preencha os campos de altura.');
      return;
    }

    if (!weightField) {
      alert('Por favor, preencha os campos de peso.');
      return;
    }

    setToShow(calculateIMC(heigthField, weightField));
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeigthField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={poweredImage} alt="Logo" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSider}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para o Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type='number'
            placeholder='Digite sua altura. Ex: 1.75 (em metros)'
            value={heigthField > 0 ? heigthField : ''}
            onChange={e => setHeigthField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type='number'
            placeholder='Digite seu peso. Ex: 75.5 (em KG)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handlerCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rigthSider}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}></GridItem>
              ))}
            </div>
          }

          {toShow && 
            <div className={styles.rigthBig}>
              <div className={styles.rigthArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="Voltar" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
