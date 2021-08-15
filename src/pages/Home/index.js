import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <AboutMe
        title="About Me"
        description="I was born and raised in Hong Kong, then came to the UK to pursue higher levels of education. I have recently graduated from De Montfort University in business management, and currently reside in the city of Birmingham UK. I am currently enrolled in Full-Stack web development coding boot-camp with the aim of acquiring software skills & knowledge to become a web developer."
      />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
