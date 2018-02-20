var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
    var currentSal = 0;
    var largerSals = [];

    for (var i = 0; i < exercise.salaries.length; i++){
        currentSal = Number(exercise.salaries[i][18]);
        if (exercise.largerSalary(currentSal)){
            largerSals.push(currentSal);
        }
    }
    return largerSals
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------
    if (item > exercise.salary) {
        return true;
    } else {
        return false;
    }

};