  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle"); 

  const avatars = document.getElementById("avatars");

  const nameEl = document.getElementById("name");
  const experienceEl = document.getElementById("experience");
  const achievementsEl = document.getElementById("achievements");
  const contributionsEl = document.getElementById("contributions");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
// team section
const team = [
      {
        name: "Pawel Kozubal",
        img: "images/pawel.jpg",
        experience: "I have a strong background in both software development and customer-focused roles, which has helped me develop both technical expertise and strong communication skills. Professionally, I have worked as a Customer Specialist at OVO Energy and Scottish Power, where I handled high-volume customer interactions, resolved technical and billing issues, and collaborated with internal teams to deliver efficient solutions. Alongside this, I have built multiple full-stack applications using Next.js, React, TypeScript, and PostgreSQL, taking projects from concept through to deployment. My experience includes implementing authentication systems, payment integrations with Stripe, API integrations, database modelling, and building responsive user interfaces with Tailwind CSS and Shadcn/UI.",
        achievements: "Some of my key achievements include building and deploying a fully functional e-commerce platform (Heaven & Hue) with secure authentication and payment processing, as well as developing Jobify, a personalised job tracking dashboard with real-time data visualisation. I also created a GitHub Profile Explorer application that integrates with the GitHub REST API and uses OAuth authentication and data visualisation tools. Academically, I achieved a First-Class Honours degree in Computer Games Development and earned the Microsoft Azure Fundamentals (AZ-900) certification. Throughout my professional roles, I consistently maintained strong performance standards while working in fast-paced environments and handling complex problem-solving situations.",
        contributions: "For this project, I was responsible for developing the responsive navigation bar and implementing the interactive Team page. I designed and styled the navigation system to be fully responsive, including a mobile hamburger menu, and ensured consistent layout across all pages. I also built the dynamic Team section, allowing users to click on team members to display their information interactively. My focus was on clean UI design, accessibility, responsiveness, and writing maintainable HTML, CSS, and JavaScript."
      },
      {
        name: "Hurley Jordan",
        img: "images/hurley.jpeg",
        experience: "small exposure to python and Javascript algorithms.",
        achievements: "Made it into the Accenture software program!",
        contributions: "Implemented formatting and functionality of homepage form button. Help protoype image format for main page. As scrum master documented and kept track of everyones roles, struggles, well being, and kept everyone up-to-speed."
      },
      {
        name: "Emma Trotter",
        img: "images/emma.jpeg",
        experience: "User experience researcher and Designer. End-to-end research for a habit-forming mental wellbeing app , and redesign for an NGO- optimising navigation and user engagement",
        achievements: "UX Design Programme",
        contributions: "Branding:name and logo design, questions for genAI form."
      },
    {
        name: "Aidan Riley",
        img: "images/aiden.jpeg",
        experience: "self-taught expereince in python and web developement.",
        achievements: "Designed interactive web pages.",
        contributions: "Designed front page main photo/ text and 'our mission' area."
      },
       {
        name: "Kieran Parkin",
        img: "images/kieren.jpeg",
        experience: "1st / 2nd Line Experience. Worked for the NHS and South Tyneside Council. Data and Software Enthusiast! I began my technical career developing a strong foundation in IT support and infrastructure through hands-on experience with hardware repair, network troubleshooting, and customer-facing support roles. Early in my journey, I developed an interest in technology while completing my BTEC in Software Development and progressed into professional IT environments, gaining experience across both public and private sectors. My goal is to transition into a data-focused or cloud-based technical role, such as a Data Analyst, IT Systems Technician, or an Apprenticeship within the data world. ",
        achievements: "Created Data Analysis presentation for Rocket Launch sites from 2000-2025 using information and data cleaning that I acquired and sorted through myself! I delivered reliable IT infrastructure support across Windows 10/11 and Windows Server 2016/2019 environments, ensuring high system availability and operational efficiency. I maintained, repaired, and configured hardware and end-user devices, minimizing downtime and enhancing overall performance. I designed and developed data analysis and visualization solutions using Power BI, Tableau, MS Excel, and Access to support data-driven decision-making. I utilized Python (Pandas, Matplotlib, Seaborn) and SQL to analyse datasets and generate meaningful insights.",
        contributions: "In this project I have mainly handled backend services, Created the Resources page containing detailed work / salary info, with a URL for jobs and more info. I also created a script using JavaScript to create dropdown text formats for this page to make the information look more appealing and take up less screen space. I have also had minor contributions to other team members projects such as design suggestions and providing information on coding when requested."
      }, 
       {
        name: "Ayesha Naveed",
        img: "images/ayesha.jpeg",
        experience: "She has experience in data analysis and reporting, working with tools such as SQL, Excel, Power BI, and Tableau to clean, analyse, and visualise data. Her background includes transforming raw datasets into meaningful insights and presenting findings in a clear, structured way to support informed decision-making.",
        achievements: "She has built and maintained a professional data analytics portfolio showcasing real-world projects and practical applications of data visualisation and analysis. Through her work, she has demonstrated strong analytical thinking, problem-solving skills, and the ability to communicate complex data insights in an accessible and impactful manner.",
        contributions: "She developed the interactive career guidance form and implemented the AI integration that generates personalised responses for users. She structured the form logic, managed user input handling, and ensured smooth communication between the frontend and backend. She also contributed to the initial wireframe designs, helping shape the layout and overall user experience of the project."
      }
    ];

    function selectMember(index) {
      document.querySelectorAll(".avatar-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });

      const m = team[index];
      document.getElementById("profileName").textContent = m.name;
      document.getElementById("profileImage").src = m.img;
      document.getElementById("profileImage").alt = m.name;
      experienceEl.textContent = m.experience;
      achievementsEl.textContent = m.achievements;
      contributionsEl.textContent = m.contributions;
    }

    // Render avatars
    team.forEach((member, index) => {
      const btn = document.createElement("button");
      btn.className = "avatar-btn";
      btn.innerHTML = `<img src="${member.img}" alt="${member.name}">`;
      btn.addEventListener("click", () => selectMember(index));
      avatars.appendChild(btn);
    });

    // Default selection
    selectMember(0);