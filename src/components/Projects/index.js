import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Samplify",
    description: "this is a music app",
    repoURL: "https://github.com/marcuslau0903/samplify-uk",
    deployedURL: "https://leon3005.github.io/samplify-uk/",
    imageURL:
      "https://github.com/marcuslau0903/samplify-uk/blob/master/assets/images/homepage_screenshot.png?raw=true",
  },
  {
    title: "",
    description: "",
    repoURL: "",
    deployedURL: "",
    imageURL: "",
  },
  {
    title: "",
    description: "",
    repoURL: "",
    deployedURL: "",
    imageURL: "",
  },
  {
    title: "",
    description: "",
    repoURL: "",
    deployedURL: "",
    imageURL: "",
  },
  {
    title: "",
    description: "",
    repoURL: "",
    deployedURL: "",
    imageURL: "",
  },
  {
    title: "",
    description: "",
    repoURL: "",
    deployedURL: "",
    imageURL: "",
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
