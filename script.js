function bmi(){

const height=parseFloat(document.getElementById("height").value);
const weight=parseFloat(document.getElementById("weight").value);
const age=parseFloat(document.getElementById('age').value);

if(!height||!weight||height<=0||weight<=0){
    alert("enter valid height and weight");
}

const heightcm=height/100;
const BMI=weight/(heightcm*heightcm).toFixed(3)


catogery=""

if(BMI<18.5){
    catogery="underweight"
}
else if(BMI>18.5 && BMI<24.9){
    catogery="normal"
}
else if(BMI>25 && BMI<29.9){
    catogery="overweight"
}
else if(BMI>30  && BMI<34.9){
    catogery="obese 1"
}
else if(BMI>35  && BMI<39.9){
    catogery="obese 1"
}
else{
    catogery="obese 2"
}
document.getElementById("result").textContent=`YOUR BMI ${BMI} and ${catogery}`;

}

function resetthe(){
  
     document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
}
