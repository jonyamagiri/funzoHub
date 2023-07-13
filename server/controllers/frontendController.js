require('../utils/db');
const Category = require('../models/categoryModel');
const Course = require('../models/courseModel');


/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Course.find({}).sort({_id: -1}).limit(limitNumber);
    const info_tech = await Course.find({ 'category': 'Information Technology' }).limit(limitNumber);
    const maths = await Course.find({ 'category': 'Mathematics' }).limit(limitNumber);
    const health = await Course.find({ 'category': 'Health' }).limit(limitNumber);

    const subject = { latest, info_tech, maths, health };

    res.render('index', { title: 'funzoHub - Home', categories, subject } );
    //res.render('index', { title: 'funzoHub - Home', categories, latest, info_tech, maths, health } );    
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}


/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'funzoHub - Categoreis', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /courses
 * Courses 
*/
exports.exploreCourse = async(req, res) => {
  try {
    //const limitNumber = 20;
    let courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.render('course', { title: 'funzoHub - Course', course } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 


async function insertCourseData(){
  try {
    await Course.insertMany([
      {
          "title": "Heart Disease and Diabetes",
          "description": "Learn about the role of nutrition in relation to diseases of the circulatory system and diabetes, which are major causes of death worldwide. You'll learn about the etiology of heart attacks, type 2 diabetes, stroke, other forms of cardiovascular diseases and how often these occur worldwide.\n        Dieticians and doctors often get questions from their patients on what they can do to improve their health. In this course,part of the Professional Certificate Program Nutrition and Disease, you will learn about the interaction between nutrients, diets and cardiometabolic disease (heart disease and diabetes).\n       Source: https://www.classcentral.com/course/edx-nutrition-heart-disease-and-diabetes-11592",
          "instructor": "Dr. Stephan Kiongozi",
          "topics": [
              "Module 1 Cardiometabolic Disease Risk",
              "Module 2 Role of diet, Prevention of Cardiometabolic Disease",
              "Module 3 Pathophysiology of Cardiometabolic Disease",
              "Module 4 Molecular Aspects"
          ],
          "category": "Health",
          "image": "health_1.jpg"
      },
      {
          "title": "FinTech Foundations and Overview",
          "description": "Our primary goal is to help you to understand FinTech and to become more confident and persuasive in your ability to analyze and make recommendations to executives within the finance industry regarding how to react to these changes.\n        This FIRST MOOC ON FINTECH IN ASIA-PACIFIC offered by HKUST presents the insight of several professors from the top business school in Asia as well as perspectives from industry professionals. HKUST has been ranked for many years as the No.1 EMBA program in the world, as the number one Finance program in Asia, and as the top MBA program in Asia by multiple independent rating and review journals and surveys.\n       Source: https://www.classcentral.com/course/fintech-11193",
          "instructor": "Ogembo O. Nyamagiri",
          "topics": [
              "Introduction to FinTech",
              "FinTech Business Applications",
              "The Tech of FinTech",
              "FinTech Implications for Established Business"
          ],
          "category": "Business",
          "image": "business_2.jpg"
      },
      {
          "title": "Managing Human Resources",
          "description": "One way or another, all employees are managed. But approaches to managing employees varying from employee-to-employee, job-to-job, manager-to-manager, organization-to-organization, and country-to-country.\n        This course provides a foundation for developing your own approach to skillfully managing employees by illustrating alternative human resource management (HRM) strategies, introducing the importance of the legal context, and thinking about what motivates employees. This will then give you the factual and conceptual basis for developing specific, critical HRM skills in subsequent courses on hiring employees, managing performance, and rewarding employees.\n       Source: https://www.classcentral.com/course/managing-human-resources-5462",
          "instructor": "Mekatilili Menza",
          "topics": [
              "Alternative Approaches to Managing Human Resources",
              "What Makes Employees Work? Money, Of Course!",
              "What Makes Employees Work Revisited...Non-Monetary Motivations",
              "The People Manager as Part of a Complex System"
          ],
          "category": "Business",
          "image": "business_1.jpg"
      },
      {
          "title": "Fibonacci Numbers and the Golden Ratio",
          "description": "Learn the mathematics behind the Fibonacci numbers, the golden ratio, and their relationship to each other. These topics may not be taught as part of a typical math curriculum, but they contain many fascinating results that are still accessible to an advanced high school student.\n        The course culminates in an exploration of the Fibonacci numbers appearing unexpectedly in nature, such as the number of spirals in the head of a sunflower.\n       Source: https://www.classcentral.com/course/differential-equations-engineers-13258",
          "instructor": "Jet Li",
          "topics": [
              "What are Fibonacci Numbers",
              "Explain the Golden Ratio",
              "Practical applications of the fibonacci numbers and the golden ratio"
          ],
          "category": "Mathematics",
          "image": "maths_2.jpg"
      },
      {
          "title": "Differential Equations for Engineers",
          "description": "This course is all about differential equations and covers both theory and applications. In the first five weeks, students will learn about ordinary differential equations, while the sixth week is an introduction to partial differential equations.\n        The course includes 56 concise lecture videos, with a few problems to solve after each lecture. After each major topic, there is a short practice quiz. At the end of each week, there is an assessed quiz. Solutions to the problems and practice quizzes can be found in the instructor-provided lecture notes.\n       Source: https://www.classcentral.com/course/differential-equations-engineers-13258",
          "instructor": "George Ondiek",
          "topics": [
              "First-Order Differential Equations",
              "Homogeneous Linear Differential Equations",
              "The Laplace Transform and Series Solution Methods",
              "Systems of Differential Equations",
              "Partial Differential Equations"
          ],
          "category": "Mathematics",
          "image": "maths_1.jpg"
      },
      {
          "title": "Ruby on Rails: An Introduction",
          "description": "Did you ever want to build a web application? Perhaps you even started down that path in a language like Java or C#, when you realized that there was so much “climbing the mountain” that you had to do? Maybe you have heard about web services being all the rage, but thought they were too complicated to integrate into your web application. Or maybe you wondered how deploying web applications to the cloud works, but there was too much to set up just to get going.\n        In this course, we will explore how to build web applications with the Ruby on Rails web application framework, which is geared towards rapid prototyping. Yes, that means building quickly! At the conclusion of this course, you will be able to build a meaningful web application and deploy it to Heroku.\n        Source: https://www.classcentral.com/course/ruby-on-rails-intro-4258",
          "instructor": "Jane Musakhulu",
          "topics": [
              "Welcome and Setting Up the Development Environment",
              "Introduction to Ruby",
              "Introduction to Ruby on Rails",
              "Ruby on Rails projects"
          ],
          "category": "Web Development",
          "image": "web_development_1.jpg"
      },
      {
          "title": "Interactivity with JavaScript",
          "description": "If you want to take your website to the next level, the ability to incorporate interactivity is a must. But adding some of these types of capabilities requires a stronger programming language than HTML5 or CSS3, and JavaScript can provide just what you need. With just a basic understanding of the language, you can create a page that will react to common events such as page loads, mouse clicks & movements, and even keyboard input.\n        This course will introduce you to the basics of the JavaScript language. We will cover concepts such as variables, looping, functions, and even a little bit about debugging tools. You will understand how the Document Object Model (DOM) is used by JavaScript to identify and modify specific parts of your page. After the course, learners will be able to react to DOM Events and dynamically alter the contents and style of their page. The class will culminate in a final project - the creation of an interactive HTML5 form that accepts and verifies input.\n        Source: https://www.classcentral.com/course/javascript-4295",
          "instructor": "James Smith",
          "topics": [
              "Week One: Introduction to JavaScript",
              "Week Two: Reacting to Your Audience",
              "Week Three: Arrays and Looping",
              "Week Four: Validating Form Data"
          ],
          "category": "Web Development",
          "image": "web_development_2.jpg"
      },
      {
          "title": "Responsive Web Design",
          "description": "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.\n        First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.\n        Finally, you'll learn how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.\n        Source: https://www.classcentral.com/course/freecodecamp-responsive-web-design-34059",
          "instructor": "John Doe",
          "topics": [
              "Basic HTML and HTML5",
              "Basic CSS",
              "Applied Visual Design",
              "Responsive Web Design Principles",
              "CSS Flexbox"
          ],
          "category": "Web Development",
          "image": "web_development_1.jpg"
      },
      {
          "title": "Understanding Multiple Sclerosis",
          "description": "Understanding Multiple Sclerosis (MS) is a free online course that aims to improve understanding and awareness of MS. Members of the public will increase their knowledge of MS-related issues and those in the MS Community will be empowered to create and contribute to personalised MS management plans.\n        The course is designed for anyone with an interest in Multiple Sclerosis including People living with MS, their families and carers, Medical and nursing professionals, Allied health professionals, Advocates, service delivery staff, support workers.\n       Source: https://www.classcentral.com/course/independent-understanding-multiple-sclerosis-ms-13338",
          "instructor": "Dr. Monica Ochuku",
          "topics": [
              "Biology and Pathology",
              "Diagnosis and Symptoms",
              "Demographics and Introduction to Risk",
              "Risk Factors",
              "Disease Management and Support Strategies",
              "Living with MS"
          ],
          "category": "Health",
          "image": "health_2.jpg"
      },
      {
          "title": "Understanding Traumatic Brain Injury (TBI)",
          "description": "Understanding Traumatic Brain Injury (TBI) is a Massive Open Online Course (MOOC), offering university-quality education about TBI covering the spectrum from mild concussion through to severe injury.\n        Traumatic brain injury is often described as a silent epidemic, with approximately 69 million cases occurring worldwide each year. The Understanding TBI MOOC is a free online course that aims to raise awareness and build knowledge to reduce risk, as well as improve management and rehabilitation outcomes for people who have experienced a TBI. \n       Source: https://www.classcentral.com/course/independent-understanding-traumatic-brain-injury-mooc-39253",
          "instructor": "Dr. Patience Igwebwa",
          "topics": [
              "Brain Science and TBI Pathology",
              "TBI from Mild to Severe",
              "TBI across the Lifespan",
              "Life after TBI"
          ],
          "category": "Health",
          "image": "health_3.jpg"
      },
      {
          "title": "Supporting Victims of Domestic Violence",
          "description": "Domestic violence is a global health issue that can take many forms and affect anyone. Health and social care professionals play an important role in recognising and helping victims of violent and abusive relationships.\n        On this course, you will address the role of gender in domestic violence and learn to recognise the various forms of violence and abuse. By the end of this course, you will feel more confident to help support domestic violence victims and survivors.\n       Source: https://www.classcentral.com/course/modelthinking-317",
          "instructor": "Success Kerongo",
          "topics": [
              "Gender and Gender-Based Violence",
              "Recognising Domestic Violence and Abuse",
              "Supporting Survivors of Domestic Violence"
          ],
          "category": "Social Sciences",
          "image": "social_science_2.jpg"
      },
      {
          "title": "Model Thinking",
          "description": "We live in a complex world with diverse people, firms, and governments whose behaviors aggregate to produce novel, unexpected phenomena. We see political uprisings, market crashes, and a never ending array of social trends. How do we make sense of it? Models. Evidence shows that people who think with models consistently outperform those who don't.\n        The models covered in this class provide a foundation for future social science classes, whether they be in economics, political science, business, or sociology. Mastering this material will give you a huge leg up in advanced courses. They also help you in life.\n       Source: https://www.classcentral.com/course/modelthinking-317",
          "instructor": "Dr. Omwana Wefwe",
          "topics": [
              "Why Model and Segregation/Peer Effects",
              "Aggregation and Decision Models",
              "Thinking Electrons: Modeling People, Categorical and Linear Models",
              "Tipping Points and Economic Growth"
          ],
          "category": "Social Sciences",
          "image": "social_science_1.jpg"
      },
      {
          "title": "Introduction to Linux",
          "description": "Develop a good working knowledge of Linux using both the graphical interface and command line, covering the major Linux distribution families.\n        Linux powers 100% of the worlds supercomputers, most of the servers powering the Internet, the majority of financial trades worldwide and over two billion Android devices. In short, Linux is everywhere. It appears in many different architectures, from mainframes to server to desktop to mobile and on a staggeringly wide variety of hardware.\n       Source: https://www.classcentral.com/course/edx-introduction-to-linux-1857",
          "instructor": "Eng. Amanda Hawkins",
          "topics": [
              "The Linux Foundation",
              "Linux Basics and System Startup",
              "Command Line Operations",
              "File Operations",
              "The Bash Shell and bash Scripting",
              "Local Security Principles"
          ],
          "category": "Information Technology",
          "image": "info_tech_1.jpg"
      },
      {
          "title": "The Data Science of Health Informatics",
          "description": "Health data are notable for how many types there are, how complex they are, and how serious it is to get them straight. These data are used for treatment of the patient from whom they derive, but also for other uses. Examples of such secondary use of health data include population health (e.g., who requires more attention), research (e.g., which drug is more effective in practice), quality (e.g., is the institution meeting benchmarks), and translational research (e.g., are new technologies being applied appropriately).\n        By the end of this course, students will recognize the different types of health and healthcare data, will articulate a coherent and complete question, will interpret queries designed for secondary use of EHR data, and will interpret the results of those queries.\n       Source: https://www.classcentral.com/course/the-data-science-of-health-informatics-12856",
          "instructor": "Chelsea Elizabeth",
          "topics": [
              "Introduction to Databases and Data Types",
              "Data Sources and Data Challenges",
              "Formulating Data Questions",
              "Real World Applications of Data Science in Health Informatics"
          ],
          "category": "Information Technology",
          "image": "info_tech_2.jpg"
      },
      {
          "title": "Health Information Technology",
          "description": "In this course you will receive an overview of the health IT ecosystem with a specific focus on the role of electronic health records (EHRs). You will be introduced to the factors that contributed to the move from paper records to digitized records and who the most common vendors are. We will go over features of EHRs such as computerized provider order entry, clinical decision support, documentation capabilities, and medication reconciliation.\n        During the course, we will also cover examples of how technical issues related to the EHR can be as simple as problems with logging or password resets. But how they can also be more complex related to alerts that are firing and the display of information. Although some of those challenges are beyond the scope of the IT support staff, having familiarity with the scope of potential problems and the broader EHR landscape is important.\n       Source: https://www.classcentral.com/course/health-it-fundamentals-22563",
          "instructor": "Prof. Josh Okonkwo",
          "topics": [
              "Introduction to Electronic Health Records",
              "EHR Applications and Features",
              "Clinical Decision Support and Databases",
              "Training, Communication, and Change Management"
          ],
          "category": "Information Technology",
          "image": "info_tech_1.jpg"
      }
  ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertCourseData();