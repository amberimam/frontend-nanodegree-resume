var bio = {
    name: "Amber Imam",
    role: "Web Developer",
    contacts: {
        mobile: "(415) 894-9095",
        email: "amber.imam@gmail.com",
        github: "amberimam",
        twitter: "@ImamAmber",
        location: "San Francisco",
    },
    welcomeMessage: "Hi! I love working on challenging problems while building products that I can be passionate about!",
    skills: ["JavaScript", "CSS", "HTML", "python"],
    biopic: "images/me_and_brownie.JPG",
    display: function() {

        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));

        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        if (this.skills && this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }
};

var education = {
    schools: [{
            name: "Carnegie Mellon University",
            location: "Pittsburgh, PA",
            degree: "M.S.",
            majors: [
                "Electrical and Computer Engineering"
            ],
            dates: "August 2008 - Dec 2008",
            url: "www.cmu.edu"
        },
        {
            name: "Carnegie Mellon University",
            location: "Pittsburgh, PA",
            degree: "B.S.",
            majors: [
                "Electrical and Computer Engineering"
            ],
            dates: "August 2004 - May 2008",
            url: "www.cmu.edu"
        }
    ],
    onlineCourses: [{
            title: "Responsive Web Design Fundamentals",
            school: "Udacity",
            dates: "September 2016",
            url: "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            title: "Intro to HTML and CSS",
            school: "Udacity",
            dates: "September 2016",
            url: "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            title: "Responsive Images",
            school: "Udacity",
            dates: "September 2016",
            url: "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            title: "JavaScript Basics",
            school: "Udacity",
            dates: "March 2017",
            url: "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ],
    display: function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

            school.majors.forEach(function(major) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
            });
        });

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
            });
        }
    }
};

var work = {
    jobs: [{
            employer: "Cisco",
            title: "Full Stack Web Developer",
            location: "San Jose, CA",
            dates: "October 2016 - present",
            description: "Developed a website to track the status of projects among Cisco’s 12 innovation centers across the globe. Before this site was developed, the team was using a shared excel spreadsheet to track the projects which was a significant bottleneck and greatly hampered productivity as only two team members had privileges to update and view the spreadsheet due to fears of data loss and corruption."
        },
        {
            employer: "Equinix",
            title: "Senior Software Engineer",
            location: "Sunnyvale, CA",
            dates: "June 2015 - September 2016",
            description: "Part of a team working on designing and developing the next generation big data infrastructure platform which empowers Equinix’s incredibly fast growing customer base by both serving customer-facing product demands (such as the Equinix Cloud Exchange) and serving our internal network operation management demands. We heavily utilize open-source software tools including Hadoop, Akka, Spark, Storm, Kafka and Cassandra and innovate on top of these technologies to provide infrastructure for service assurance, service analytics and service provisioning including: inventory management, topology management, capacity management, fault management, and many more."
        }
    ],
    display: function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
};

var projects = {
    projects: [{
        title: 'Animal Trading Cards',
        dates: 'October 2016',
        description: 'This is the second project required by the Udacity Front-End Web Developer Nanodegree. We were given a design prototype and asked to use HTML and CSS to convert the prototype into a functional webpage. I chose to create a trading card about a Frog.',
        images: [
            "images/animal-trading-card.png"
        ]
    }],
    display: function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

            project.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
            });

        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
