// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  

sleep(3000).then(() => {
    window.location.replace("http://www.w3schools.com");
});
