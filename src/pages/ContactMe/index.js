import Container from "react-bootstrap/Container";
import ContactForm from "../../components/ContactForm";

const ContactMe = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Contact me</h1>
      </div>
      <Container>
        <div className="p-3">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactMe;
