const shout = string => {
   return string.toUpperCase();
}

const whisper = string => {
    return string.toLowerCase();
}

const logShout = string => {
    console.log(string.toUpperCase());
}

const logWhisper = string => {
    console.log(string.toLowerCase());
}

const sayHiToHeadphonedRoommate = string => {
    if(string.toLowerCase() === string){
        return `I can't hear you!`;
    } else if(string.toUpperCase() === string){
        return `YES INDEED!`;
    } else if(string === "Let's have dinner together!"){
        return `I would love to!`;
    }
}