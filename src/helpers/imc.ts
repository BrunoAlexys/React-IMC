import { Level } from "../type/level";

export const levels: Level[] = [
    { title: 'Abaixo do peso', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Peso normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#FFD700', icon: 'down', imc: [25, 29.9] },
    { title: 'Obesidade I', color: '#FF8C00', icon: 'down', imc: [30, 34.9] },
    { title: 'Obesidade II', color: '#C3423F', icon: 'down', imc: [35, 39.9] },
    { title: 'Obesidade III', color: '#1C1C1C', icon: 'down', imc: [40, 99] },
];

export const calculateIMC = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}

// FFFF00
// FF8C00
// 1C1C1C	

// #E2B039
// C3423F
// C3423F