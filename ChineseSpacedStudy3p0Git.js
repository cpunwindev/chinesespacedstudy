/*
Welcome to the source code for ChineseSpacedStudy version 3.1.2 [Heroku]
The 3.0.0 update included:
-Being hosted on the heroku server with a scheduler addon
-Adding the nodemailer module as a notification/output system
-New output format rather than just 1(0)
-Accomodates hard versions of lists
-Works assuming 10 words per day
-Gives a duration estimate

The 3.1.2 modification included:
-Security mod, not disclosed

The 3.0.1 fix resolved:
-The syntax for the operation to get dayNumber in the function getDayNumber() was reversed
-so that it was 18431 - daysSinceEpoch rather than daysSinceEpoch - 18431

The 3.0.2 fix resolved:
-The getDayNumber() function subtracted 18431 from daysSinceEpoch which had 6/18/2020 as day
-zero, however the desired zero day was 6/17/2020 so 18431 was changed to 18430
*/

//operation vars open
var date = new Date();
var dayNumber;
var rI = "";
var rN1 = "";
var rH1 = "";
var rN2 = "";
var rH2 = "";
var rN3 = "";
var rH3 = "";
var rN4 = "";
var rH4 = "";
var rN5 = "";
var rH5 = "";
var rN6 = "";
var rH6 = "";
var rN7 = "";
var rH7 = "";
var totalDurationMinutes = 30; //starts at 30 because by default you are writing a list every day which is estimated to
//take 30 minutes

//operation vars close

//output vars open
var dateOutput;
var reviewOutput;
var vocabularyOutput;
var durationOutput;
var softwareInfoOutput;
var bodyText;
//output vars close

//function call open
functionCall();
function functionCall() {
    getDateOutput();
    getDayNumber();
    getReviewOutput();
    getDurationOutput();
    getVocabularyOutput();
    getSoftwareInfoOutput();
    compileBodyText();
}
//function call close

//functions open
function getDateOutput () {
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    dateOutput = y + "年" + (m  + 1) + "月" + d + "號";
}

//note 6/17/2020 = day zero and 18430 is a unique number to find the day in relation to 6/17/2020
//6/17/2020 was 18430 days from the Epoch of the date object.
function getDayNumber() {
    var msSinceEpoch = date.getTime();
    var daysSinceEpoch = msSinceEpoch / (86400000);
    dayNumber = Math.floor(daysSinceEpoch - 18430);
}

function getReviewOutput() {
    rI = "Write list #" + dayNumber + " (30m)\n";
    if (dayNumber > 1) { //h
        rH1 = "Review #1 of list " + (dayNumber - 1) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 2) { //n
        rN1 = "Review #1 of list " + (dayNumber - 2) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 4) { //h
        rH2 = "Review #2 of list " + (dayNumber - 4) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 6) { //n
        rN2 = "Review #2 of list " + (dayNumber - 6) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 8) { //h
        rH3 = "Review #3 of list " + (dayNumber - 8) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 13) { //n
        rN3 = "Review #3 of list " + (dayNumber - 13) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 15) { //h
        rH4 = "Review #4 of list " + (dayNumber - 15) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 27) { //n
        rN4 = "Review #4 of list " + (dayNumber - 27) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 25) { //h
        rH5 = "Review #5 of list " + (dayNumber - 29) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 57) { //n
        rN5 = "Review #5 of list " + (dayNumber - 57) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 45) { //h
        rH6 = "Review #6 of list " + (dayNumber - 45) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 102) { //n
        rN6 = "Review #6 of list " + (dayNumber - 102) + "[A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    if (dayNumber > 80) { //h
        rH7 = "Review #7 of list " + (dayNumber - 80) + " [H] (10m)\n";
        totalDurationMinutes = totalDurationMinutes + 10;
    }
    if (dayNumber > 162) { //n
        rN7 = "Review #7 of list " + (dayNumber - 162) + " [A] (15m)\n";
        totalDurationMinutes = totalDurationMinutes + 15;
    }
    reviewOutput = "Review Agenda:\n" + rI + rH1 + rN1 + rH2 + rN2 + rH3 + rN3 + rH4 + rN4 + rH5 + rN5 + rH6 + rN6 + rH7 + rN7;
}

function getDurationOutput() {
    var totalDurationHours = Math.floor((totalDurationMinutes/60));
    var totalDurationMinutesRemainder = totalDurationMinutes - (totalDurationHours * 60);
    durationOutput = "Estimated total duration: " + totalDurationHours + " Hours " + totalDurationMinutesRemainder + " Minutes\n";
}

function getVocabularyOutput() {
    var vocabularySize = ((dayNumber - 2) * 10) + 140; //140 comes from the system i was using prior
    if (vocabularySize < 0) {
        vocabularySize = 0;
    }
    if (vocabularySize < 5000) {
        vocabularyOutput = "Hey! You have a Mandarin Chinese (普通話) vocabulary of about " + vocabularySize + " words. Keep it up! 加油!\n";
    } else {
        vocabularyOutput = "Wow! You have a Mandarin Chinese (普通話) vocabulary of over 5000 words ( " + vocabularySize + " to be precise.) ! Congratulations! 恭喜!\n";
    }
}

function getSoftwareInfoOutput() {
    softwareInfoOutput = "Chinese Spaced Study\n"
    softwareInfoOutput = softwareInfoOutput + "Version: 3.0.0 [Heroku]\n";
    softwareInfoOutput = softwareInfoOutput + "Language: Javascript\n";
    softwareInfoOutput = softwareInfoOutput + "Last Update: 6/17/2020\n";
}

function compileBodyText() {
    //Review agenda -> Duration Ouput -> Vocabulary Output -> Software Information
    bodyText = reviewOutput + "\n" + durationOutput + "\n" + vocabularyOutput + "\n" + softwareInfoOutput;
}
//functions close

//mailer section
let nodemailer = require('nodemailer');
const { get } = require('http');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpass'
    }
});

let mailOptions = {
    from: 'youremail@gmail.com',
    to: 'destinationemail@gmail.com',
    subject: ("Today's Chinese Agenda: " + dateOutput),
    text: (bodyText)
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });