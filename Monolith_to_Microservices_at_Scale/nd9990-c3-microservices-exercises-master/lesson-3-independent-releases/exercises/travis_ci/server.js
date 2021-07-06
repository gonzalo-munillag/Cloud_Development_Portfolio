


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const docker_username_value = process.env.DOCKER_USERNAME;
  
  while(true) {
    console.log('My docker user name is ${docker_username_value}');
    await sleep(5000);
  }
}

main();
