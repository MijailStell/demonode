// MijailStell
const { taskOne, taskTwo } = require('./tasks');

async function main(){
    console.time("Medición");
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd("Medicion");

    console.log("TaskOne es ", valueOne);
    console.log("TaskOne es ", valueTwo);
}

main();