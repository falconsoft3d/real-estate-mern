const cron = require("node-cron");
let shell = require("shelljs");

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

cron.schedule("* * * * * *", function(){
    try {
        const day= Date()
        console.log("Cron", day);
    } catch (error) {
        console.error(error);
    }
    
});