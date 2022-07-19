import styles from "./Contact.module.scss";
import { contact } from "../../information";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>{contact.title}</h1>
      <ul>
        {contact.links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.name} />
              <h2>{link.name}</h2>
              <p>{link.text}</p>
              <span>{link.subtext}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
