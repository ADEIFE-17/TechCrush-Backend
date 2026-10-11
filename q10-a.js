const totalSeconds = 98765;

const days = Math.floor(totalSeconds / 86400);
const remainingAfterDays = totalSeconds % 86400;

const hours = Math.floor(remainingAfterDays / 3600);
const remainingAfterHours = remainingAfterDays % 3600;

const minutes = Math.floor(remainingAfterHours / 60);
const seconds = remainingAfterHours % 60;

console.log(`${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);