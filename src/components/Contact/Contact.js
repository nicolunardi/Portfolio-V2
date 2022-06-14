import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>
        Let's work together.
      </h1>
      <ul>
        <li>
          <a href=''>
            <img src={require('../../assets/email.png')} alt='email' />
            <h2>Email</h2>
            <p>nlunardi@hotmail.com</p>
            <span>Chat now ></span>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={require('../../assets/linkedin.png')} alt='linkedin' />
            <h2>Linked In</h2>
            <p>Let's connect those shit</p>
            <span>Connect now ></span>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={require('../../assets/github.png')} alt='github' />
            <h2>Github</h2>
            <p>Browse more project keke</p>
            <span>Browse ></span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;