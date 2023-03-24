//grader function. grades according to student marks

function grader(marks){
    if (marks > 0 && marks<=100){
    if(marks >= 79){
        return "A";
    }else if(marks>=60 && marks<79){
        return "B";
    }else if(marks >= 59 && marks<49){
        return "C";
    }else if(marks>=40 && marks <49){
        return "D";
    }else{
        return "E";
    }
}else{
    return "marks have to be between 0 and 100";
}
}
//sped detector. checks for overspeeding.
function speedDetector(speed){
    const speedLimit = 70;
    const point =0;
    if(speed<70){
        return "Ok.";
    }else{
        let points = Math.floor((speed-speedLimit)/5)
        if(point>=12){
            return points;
        }else{
            return "License suspended";
        }
    }
}
//calculates the net salary 
function netSalaryCalculator(salary, benefits= 0){
   
    const grossIncome = salary + benefits;
    const nssfPercentage= 0.06;

const tax=(grossIncome)=>{
    if(grossIncome<=24000){
       return  grossIncome*0.1;
    
   }else if(grossIncome>24000 && grossIncome<=32333){
      return grossIncome* 0.25;
    
   }else{
    return grossIncome* 0.35;
   
   }
  
}
   

    let nhif=(grossIncome)=>{
        if (grossIncome<=5999){
            return 150;
            
         }else if (grossIncome>=6000 && grossIncome<=7999){
              return 300;
             
         } else if (grossIncome>=8000 && grossIncome<=11999){
               return 400;
              
         }else if (grossIncome>=12000 && grossIncome<=14999){
              return 500;
              
         }else if (grossIncome>=15000 && grossIncome<=19999){
            return 600;
             
         }else if (grossIncome>=20000 && grossIncome<=24999){
             return 750;
             
         }else if (grossIncome>=25000 && grossIncome<=29999){
             return 850;
             
         }else if (grossIncome>=30000 && grossIncome<=34999){
             return 900;
             
         }else if (grossIncome>=35000 && grossIncome<=39999){
             return 950;
             
         }else if (grossIncome>=40000 && grossIncome<=44999){
            return 1000;
             
         }else if (grossIncome>=45000 && grossIncome<=49999){
             return 1100;
          
         }else if (grossIncome>=50000 && grossIncome<=59999){
            return 1200;
          
         }else if (grossIncome>=60000 && grossIncome<=69999){
             return 1300;
          
         }else if (grossIncome>=70000 && grossIncome<=79999){
            return 1400;
         
         }else if (grossIncome>=80000 && grossIncome<=89999){
             return 1500;
          
         }else if (grossIncome>=90000 && grossIncome<=99999){
              return 1600;
          
         }else{
              return 1700;
              
         }
       
    }
    
    let nssf = grossIncome*nssfPercentage;


      let   netSalary = (grossIncome -nssf -tax -(nhif-(nhif*0.15)))
       
return netSalary;
}

console.log(netSalaryCalculator(100000, 30000))