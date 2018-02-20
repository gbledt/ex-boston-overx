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

    // Initialize the variables needed
    var currentSal = 0;
    var largerSals = [];

    for (var i = 0; i < exercise.salaries.length; i++){
        // Pull out the current salary to avoid multiple database calls
        currentSal = Number(exercise.salaries[i][18]);

        // Check if larger with functions
        if (exercise.largerSalary(currentSal)){
            // Push the salary if larger onto the array
            largerSals.push(currentSal);
        }
    }

    // rEturn the final array of larger salaries
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

    // Check if the salary passed in is larger thatn requested
    if (item > exercise.salary) {
        return true;
    } else {
        return false;
    }

};