const { bmiCalcultor } = require('../bmiCalculator');

describe('bmiCheck', () => {
    test('WeightKg: 96, HeightCm: 171 should return BMI: 32.83', () => {
        let result = bmiCalcultor(96, 171);
        expect(result.bmi).toBeCloseTo(32.83);
    })

    test('WeightKg: 96, HeightCm: 171 should return BMI Category is Moderately obese and healthRisk is Medium risk', () => {
        let result = bmiCalcultor(96, 171);
        expect(result).toStrictEqual({
            "bmi": 32.83,
            "cateGory": "Moderately obese",
            "healthRisk": "Medium risk"
        });
    })

    test('WeightKg: 1, HeightCm: 1 should return 10000', () => {
        let result = bmiCalcultor(1, 1);
        expect(result.bmi).toBe(10000);
    })
})