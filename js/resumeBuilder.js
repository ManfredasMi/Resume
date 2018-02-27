var skills = ["Self-motivated", " Open minded", " Functional testing", " JS basics"];

var bio = {
  "name": "Manfredas Minikas",
  "role": "Software Engineer",
  "contacts": {
    "email": "manfredasmi@gmail.com",
    "mobile": "+370 622 12945",
    "location": "Vilnius"
  },
  "skills": skills,
  "welcomeMessage": "Yo and welcome guys!",
  "bioPIC": "images/Foto.jpg"
};

var work = {
  "jobs": [{
      "employer": "Swedbank",
      "title": "Software Engineer",
      "dates": "November 2017 - present",
      "description": "Creating and maintaining automation tests. Execution of manual tests."
    },
    {
      "employer": "Nordcurrent",
      "title": "Video Game Tester",
      "dates": "October 2016 - November 2017",
      "description": "Execution of manual tests. Creating automaton tests in JAVA. Creating and maintaining test plans and test cases. Bug management \nTakings versions to production"
    }
  ]
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

var projects = {
  "projects": [{
    "title": "UDACITY",
    "dates": "2018-2019",
    "description": "udacity building portfolio project",
    "images": ["images/udacity.png"]
  }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPIC);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedName);
$('#header').append(internationalizeButton);
$("#header").append(formattedRole);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);
$("#mapDiv").append(googleMap);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedLocation);


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

function displayWork() {
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
}

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}


projects.display = () => {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();
