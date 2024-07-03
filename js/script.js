let text;
let para;
let feet;
let inches;
let weight;
let toMeters;

function checkAge(){

    if(document.getElementById('radio_id_yes').checked){


        //get the div we created
        para = document.getElementById('ifAge');

        //create a new p element
        text = document.createElement('p');

        //set some attributes to the p element
        text.setAttribute('id', 'text');

        //give the p element some text
        text.innerHTML = "Great, this tool will only give accurate BMI results for adults aged 18 years and over.";

        //place the p element inside the div
        para.appendChild(text);

     }

}

function metrics(){

    feet = document.getElementById('input_feet').value / 3.281;
    inches = document.getElementById('input_inches').value / 39.37;
    weight = document.getElementById('input_weight').value;

    metrics_btn = document.getElementById('metrics_submit_btn');

    toMeters = feet + inches;


    bmiFormula();


}

function bmiFormula(){

    const bmi_square = toMeters * toMeters;
    const weight_divide = weight/bmi_square;
    const rounded = Math.round(weight_divide*10)/10;

 
    const display = document.getElementById('display-bmi');   

    const outcome = document.getElementById('outcome');

    const advice = document.getElementById('advice');

    if (rounded < 18.5) {

      
        display.innerHTML = rounded;
        outcome.innerHTML = "Your BMI is in the underweight category."
        advice.innerHTML = "A BMI of 18.5 or below is classed as underweight. <br><br> This suggests you could benefit from gaining weight. <br> <br> Working towards a healthier weight range could strengthen your immune system and help prevent bone fractures."
   
    }else if (rounded > 18.5 && rounded <= 24.9){

       
        display.innerHTML = rounded;
        outcome.innerHTML = "Your BMI is in the healthy weight category."
        advice.innerHTML = "A BMI between 18.5 and 24.9 below is classed as a healthy weight. <br><br> Try to keep your weight the same or in the healthy weight range for your height. <br> <br> This will help prevent any weight-related problems, like type 2 diabetes or heart disease."
    }
    
    else if(rounded <= 25.0 || rounded <= 29.9){

        display.innerHTML = rounded;
        outcome.innerHTML = "Your BMI is in the overweight category."
        advice.innerHTML = "A BMI between 25 and 29.9 is classed as overweight. <br><br> An overweight result suggests you could benefit from making some healthy changes. <br><br> If you want to lose some weight, working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabeties and heart disease."
    }


    else if(rounded > 30.0){

      
        display.innerHTML = rounded;
        outcome.innerHTML = "Your BMI is in the obese category."
        advice.innerHTML = "A BMI of 30 or more is classed as obese. <br><br> An obese result suggests you are carrying too much weight and you would benefit from making some healthy changes. <br><br> If you want to lose some weight, slowly working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease."
    }


}


