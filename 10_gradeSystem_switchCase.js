function gradeSystem(score){
    console.log(`-----`)
    switch (true) {
        case score>=100 || score==" " || score <= 0 || score==undefined:
            console.log(`Invalid input--> ${score}`);
        break;
        case score<35:
            console.log(`You are failed with score- ${score}`);
            break;
        case score>=35 && score<60:
            console.log(`You are passed with score- ${score} & your grade is "C".`);
            break;
        case score>=60 && score<75:
            console.log(`You are passed with score- ${score} & your grade is "B".`);
            break;
        case score>=75 && score<90:
            console.log(`You are passed with score- ${score} & your grade is "A".`);
            break;
        case score>=90 && score<100:
            console.log(`You are passed with score- ${score} & your grade is "A+".`);
            break;
        default:
            console.log(`Invalid Input--> ${score}`);
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