function gradeSystem(score) {
    console.log(`--------`)
    if(score>=100 || score==" " || score <= 0 || score==undefined){
        console.log(`Invalid input--> ${score}`)
    }else if (score < 35) {
        console.log(`You are failed with score ${score}.`)
    }else if (score >= 35 && score < 60) {
        console.log(`You are passed with score ${score} & grade is "C".`)
    }else if (score >= 60 && score < 75) {
        console.log(`You are passed with score ${score} & grade is "B".`)
    }else if (score >= 75 && score < 90) {
        console.log(`You are passed with score ${score} & grade is "A".`)
    }else if (score >= 90 && score < 100) {
        console.log(`You are passed with score ${score} & grade is "A+".`)
    }else{
        console.log(`Invalid Input--> ${score}`)
    }
}

gradeSystem(101);
gradeSystem(40);
gradeSystem(13);
gradeSystem(" ");
gradeSystem(98);
gradeSystem("Fifty Five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);
