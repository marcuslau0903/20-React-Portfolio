import Button from "react-bootstrap/Button";

const contactLinks = [
  {
    text: "GitHub",
    href: "https://github.com/marcuslau0903",
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/marcus-lau-099368a6/",
  },
  {
    text: "Email",
    href: "mailto:marcuslau0903@gmail.com",
  },
  {
    text: "CV",
    href: "../CV Marcus Lau.pdf",
  },
];

const ContactLinks = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-4">
      {contactLinks.map((contactLink) => {
        return (
          <div className="m-2">
            <Button as="a" download variant="light" href={contactLink.href}>
              {contactLink.text}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ContactLinks;
