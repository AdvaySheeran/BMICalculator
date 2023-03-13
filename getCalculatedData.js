import express from 'express';
const getCalculatedData = express.Router();

import data from './users.json' assert { type: 'json' };

getCalculatedData.get('/', (req, res, next) => {
    
    
    const dataLength = data.length
    for (var i = 0; i < dataLength; i++) { 
        
        let [bmiValue, BMICategory, healthRisk]  = getBMIValue(data[i])
        
        data[i]["bmiValue"] = bmiValue;
        data[i]["BMICategory"] = BMICategory;
        data[i]["healthRisk"] = healthRisk;
        //data[i]["overWeighCount"] = overWeighCount;
    }
    res.send(data)
});

const getBMIValue = (user) => {
    let heightMeters = user.HeightCm/100;
    var bmiValue = user.WeightKg/(heightMeters*heightMeters);
    var healthRisk;
    var BMICategory;

    if (bmiValue < 18.5) {
        BMICategory = "Underweight";
        healthRisk = "Malnutrition risk";
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        BMICategory = "Normal weight";
        healthRisk ="Low risk";
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9){
        BMICategory = "Overweight";
        healthRisk ="Enhanced risk"
    }
    else if (bmiValue >= 30 && bmiValue <= 34.9){
        BMICategory = "Moderately obese";
        healthRisk = "Medium risk"
    }
    else if(bmiValue >= 35 && bmiValue <= 39.9){
        BMICategory = "Severel obese";
        healthRisk ="High risk"
    }
    else{
        BMICategory = "Very severely obese";
        healthRisk ="Very high risk"
    }
    return [bmiValue, BMICategory, healthRisk];
}

export default getCalculatedData;