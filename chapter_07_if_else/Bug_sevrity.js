
let score=9;


// Function to classify bug severity based on impact score in Javascript
if(score) {
    if (score >= 9 && score <= 10) {
        console.log("Severity: Critical — Block release");
    } else if (score >= 7 && score < 9) {
        console.log("Severity: High");
    } else if (score >= 4 && score < 7) {
        console.log("Severity: Medium");
    } else if (score >= 1 && score < 4) {
        console.log("Severity: Low");
    } else {
        console.log("Invalid score");
    }
}