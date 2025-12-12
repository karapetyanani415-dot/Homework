function anun() {
  const secound = setInterval(() => {
    console.log("Ping")
  }, 1000);

  setTimeout(() => {
    clearInterval(secound)
  }, 5000);
}