import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Samplify",
    description:
      "Samplify allows you to search for any song and find samples of other songs that were used by the producer with playable YouTube links.",
    repoURL: "https://github.com/marcuslau0903/samplify-uk",
    deployedURL: "https://leon3005.github.io/samplify-uk/",
    imageURL:
      "https://github.com/marcuslau0903/samplify-uk/blob/master/assets/images/homepage_screenshot.png?raw=true",
  },
  {
    title: "Coding Quiz",
    description:
      "A timed coding quiz with multiple choice questions. The webpage features a dynamically updated HTML and CSS powered by JavaScript.",
    repoURL: "https://github.com/marcuslau0903/Week4TimedCodingQuiz",
    deployedURL: "https://marcuslau0903.github.io/Week4TimedCodingQuiz/",
    imageURL:
      "https://github.com/marcuslau0903/week2Advanced-CSS-Portfolio/blob/master/Assets/Images/quiz.PNG?raw=true",
  },
  {
    title: "Team Profile Generator",
    description:
      "The team profile webpage dynamically generates a team profile for a company, with each card containing summaries of employee information",
    repoURL:
      "https://github.com/marcuslau0903/10-Object-Oriented-Programming-Team-Profile-Generator",
    deployedURL:
      "https://github.com/marcuslau0903/10-Object-Oriented-Programming-Team-Profile-Generator",
    imageURL:
      "https://github.com/marcuslau0903/10-Object-Oriented-Programming-Team-Profile-Generator/raw/master/src/images/teampropic.PNG",
  },
  {
    title: "Note Taker",
    description:
      "The Note Taker application allows user to write and save notes.",
    repoURL: "https://github.com/marcuslau0903/11-Express.js-Note-Taker",
    deployedURL: "https://shrouded-badlands-27921.herokuapp.com/",
    imageURL:
      "https://github.com/marcuslau0903/11-Express.js-Note-Taker/raw/master/images/homepage.PNG",
  },
  {
    title: "Vegan pals",
    description:
      "An app that match users with the same intolerances and allows them to schedule for a cooking session based on their preference",
    repoURL: "https://github.com/marcuslau0903/vegan-pals",
    deployedURL: "https://stormy-stream-13655.herokuapp.com/",
    imageURL:
      "https://github.com/marcuslau0903/vegan-pals/raw/main/public/assets/screenshots/photo1.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "The webpage will retrieve data from third-party weather API OpenWeather API by making fetch requests and dynamically render captured data results based on user search input.",
    repoURL:
      "https://github.com/marcuslau0903/week6Server-Side-APIs-Weather-Dashboard",
    deployedURL:
      "https://marcuslau0903.github.io/week6Server-Side-APIs-Weather-Dashboard/",
    imageURL:
      "https://github.com/marcuslau0903/week6Server-Side-APIs-Weather-Dashboard/raw/master/images/demo.PNG",
  },
];

const Projects = () => {
  return (
    <div className="my-4 p-3">
      <h2 className="text-center">My Projects</h2>
      <div className="d-flex flex-wrap justify-content-center my-4">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
