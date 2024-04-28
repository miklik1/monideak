interface ContactFormEmailProps {
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>Vyplnění kontaktního formuláře</h1>
    <p>Od {email}</p>
    <h2>Zpráva:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
