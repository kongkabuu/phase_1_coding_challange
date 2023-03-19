function grader(marks){
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
}

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