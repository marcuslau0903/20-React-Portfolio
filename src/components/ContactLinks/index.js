import Button from "react-bootstrap/Button";

const contactLinks = [
  {
    text: "GitHub",
    href: "",
  },
  {
    text: "LinkedIn",
    href: "",
  },
  {
    text: "Email",
    href: "",
  },
  {
    text: "CV",
    href: "",
  },
];

const ContactLinks = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-4">
      {contactLinks.map((contactLink) => {
        return (
          <div className="m-2">
            <Button variant="link" href={contactLink.href}>
              {contactLink.text}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ContactLinks;
