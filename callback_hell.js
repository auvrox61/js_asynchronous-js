function task1(callback){
    setTimeout(()=>{
        console.log("Get up at 5:30 AM");
        callback();
    },2000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("Start for university");
        callback();
    },1000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Class starts at 8 AM");
        callback();
    },2000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("Go to CDS for breakfast at 9:15 PM");
        callback();
    },500);
}

function task5(callback){
    setTimeout(()=>{
        console.log("Do classes till 1 PM before the lunch break");
        callback();
    },5000);
}

function task6(callback){
    setTimeout(()=>{
        console.log("Eat something from the cafeteria");
        callback();
    },300);
}

function task7(callback){
    setTimeout(()=>{
        console.log("Rejoin the classes at 2:30 PM");
        callback();
    },2000);
}

function task8(callback){
    setTimeout(()=>{
        console.log("Do classes until 5 PM");
        callback();
    },2500);
}

function task9(callback){
    setTimeout(()=>{
        console.log("Return home at 8 PM");
        callback();
    },2000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        task7(()=>{
                            task8(()=>{
                                task9();
                            });
                        });
                    });
                });
            });
        });
    });
});