// setTimeout(() => {
//     console.log("Hallo nach 2 Sekunden!")
// }, 2000);

// console.log("Hallo!")

const greeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hallo nach 2 Sekunden!");
    resolve("Erledigt");
  }, 2000);
});

// const startGreeting = () => {
//     greeting.then((result) => {
//         console.log(result)
//         console.log("Hallo")
//     })
//     .catch(() => {})
// }

const startGreeting = async () => {
  try{
    const result = await greeting;
  console.log(result)
  }catch (error){
    console.error(error)
  }
};

startGreeting();
