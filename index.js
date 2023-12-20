function setTime(){
    let time = new Date();

    let hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let PM = time.getHours () > 11;

    let minutes = time.getMinutes();
    minutes < 10 ? minutes = `0` + minutes : minutes;
    
    let semiColon = time.getSeconds() % 2 ? ':': ' ';

    let timeString = `${hour}${semiColon}${minutes} ${PM ? 'PM': 'AM'}`
    document.getElementById(`time`).innerText = timeString;
}
setInterval(()=>{
    setTime();
}, 1000)
setTime();

