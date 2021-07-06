const my_name = process.env.NAME;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`I am ${my_name}`);
    await sleep(5000);
  }
}

main();
