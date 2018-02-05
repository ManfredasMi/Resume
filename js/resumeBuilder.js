var skills = ["Self-motivated", "open minded", "Functional testing", "JS basics"];
var bio = {
  "name": "Manfredas Minikas",
  "role": "Software Engineer",
  "contacts": {
    "email": "manfredasmi@gmail.com",
    "mobile": "+370 622 12945",
    "location": "Vilnius, Lithuania"
  },
  "skills": skills,
  "welcomeMessage": "Yo and welcome guys!",
  "bioPIC": "images/Foto.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPIC);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedSkills);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedLocation);

var work = {};
work.position = "Software Engineer";
work.employer = "Swedbank";
work.years = "till present";
work.city = "Vilnius, Lithuania";

$("#main").append(work.position);
// $("#main").append(work.employer);
// $("#main").append(work.years);
// $("#main").append(work.city);

var education = {};
education["name"] = "Vilnius Gediminas Technical University";
education["years"] = "2006-2012";
education["city"] = "Vilnius, Lithuania";

$("#main").append(education.name);
// $("#main").append(education.years);
// $("#main").append(education.city);
