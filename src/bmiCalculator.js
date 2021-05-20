const fs = require('fs');
const path = require('path')

let bmiData = fs.readFileSync('./inputData/data.json');
bmiData = JSON.parse(bmiData);

let Overweight = 0;

const bmiCalcultor = (WeightKg, HeightCm) => {
    let bmi, cateGory, healthRisk;
    bmi = +(WeightKg / ((HeightCm / 100) ** 2)).toFixed(2);    
    switch (true) {
        case (bmi <= 18.5):
            cateGory = 'Underweight';
            healthRisk = 'Malnutrition risk'
            break;
        case (bmi >= 18.5 && bmi <= 24.9):
            cateGory = 'Normal weight';
            healthRisk = 'Low risk'
            break;
        case (bmi >= 25 && bmi <= 29.9):
            cateGory = 'Overweight';
            healthRisk = 'Enhanced risk';
            Overweight++;
            break;
        case (bmi >= 30 && bmi <= 34.9):
            cateGory = 'Moderately obese';
            healthRisk = 'Medium risk'
            break;
        case (bmi >= 35 && bmi <= 39.9):
            cateGory = 'Severely obese';
            healthRisk = 'High risk'
            break;
        case (bmi >= 40):
            cateGory = 'Very severely obese';
            healthRisk = 'Very high risk'
            break;
        default:
            break;
    }
    return {bmi, cateGory, healthRisk };
}

bmiData.forEach(p => {
    let {bmi, cateGory, healthRisk } = bmiCalcultor(p.WeightKg, p.HeightCm);
    p.BMI = bmi;
    p["BMI Category"] = cateGory;
    p["Health risk"] = healthRisk;
})

if (!fs.existsSync(path.join('outputData'))){
    fs.mkdirSync(path.join('outputData'));
}
fs.writeFileSync('./outputData/finalOutput.json', JSON.stringify(bmiData));

module.exports = { Overweight, bmiData, bmiCalcultor}
