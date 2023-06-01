// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.




var expression = '^(http|https)://[a-zA-Z0-9_.-]+\.[a-zA-Z]+$'
var regex = new RegExp(expression);
var t = 'https://google.com';

if (t.match(regex)) {
  console.log("Successful match");
} else {
  console.log("No match");
}





// 6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.

expression = `^[https://www.linkedin.com/in/]+[a-zA-Z0-9_-]{5,30}+[a-zA-Z0-9]{1}+$`
var regex = new RegExp(expression)
var link =""

if (link.match(regex)){
    console.log("it's a valid linkdin profile link.")
}else{
    console.log("Provided linkdin profile link is in correct")
}