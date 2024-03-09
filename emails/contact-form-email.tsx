interface ContactFormEmailProps {
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
