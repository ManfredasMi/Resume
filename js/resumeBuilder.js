var skills = ["Self-motivated", " Open minded", " Functional testing", " JS basics"];
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
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedLocation);

if (bio.hasOwnProperty('skills')) { // (bio.skills.length > 0) -> instead of (bio.hasOwnProperty('skills'))
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
};

var work = {
  "jobs": [{
      "employer": "Swedbank",
      "title": "Software Engineer",
      "dates": "November 2017 - present",
      "description": "lala land"
    },
    {
      "employer": "Nordcurrent",
      "title": "Video Game Tester",
      "dates": "October 2016 - November 2017",
      "description": "Execution of manual tests. Creating automaton tests in JAVA. Creating and maintaining test plans and test cases. Bug management \nTakings versions to production"
    }
  ]
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

  var education = {
    "schools": [{
        "name": "Venta Secondary School",
        "years": "1994-2006",
        "city": "Venta, Lithuania"
      },
      {
        "name": "Vilnius Gediminas Technical University",
        "years": "2006-2012",
        "city": "Vilnius, Lithuania"
      }
    ],
    "onlineCourses": [{
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": 2018,
      "url": "http://www/udacity.com/course/ud804"
    }]
  }
