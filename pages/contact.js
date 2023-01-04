import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/ContactPage.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import bg from '../public/images/headerBGs/contact-bg.jpg';

export default function CotactPage() {
  const honeyPot = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // hide honeypot input after page loads
    if (honeyPot.current) honeyPot.current.style.display = 'none';
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (!data.subject) {
      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          data,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        // console.log(error);
        return;
      }
    }
    setSubmitted(true);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <Layout title="Contact Us">
      <Header title="Contact Us" bg={bg}></Header>
      <div className={styles.contactPage}>
        <section>
          <h2>Talk to Mordy</h2>
          <ul>
            <li>
              <span className="highlight">Name: </span> Mordy Siegal
            </li>
            <li>
              <span className="highlight">Address: </span> 5454 Fargo Ave
              <br />
              Skokie, IL 60077
            </li>
            <li>
              <span className="highlight">Phone: </span> 773-897-9904
            </li>
            <li>
              <span className="highlight">Email: </span> info@mordyskosher.com
            </li>
          </ul>
        </section>
        <section className={styles.contactForm}>
          {submitted ? (
            <h2>Message submitted, thanks.</h2>
          ) : (
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              {/* Subject is not necessary and will serve as a spam-prevention honeypot */}
              <input {...register('subject')} type="text" ref={honeyPot} />
              <label htmlFor="name">
                <h4>Name</h4>
                {errors.name && (
                  <p className={styles.error}>* {errors.name.message}</p>
                )}
                <input
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  type="text"
                />
              </label>

              <label htmlFor="email">
                <h4>Email</h4>
                {errors.email && (
                  <p className={styles.error}>* {errors.email.message}</p>
                )}
                <input
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  type="email"
                />
              </label>

              <label htmlFor="message">
                <h4>Message</h4>
                {errors.message && (
                  <p className={styles.error}>* {errors.message.message}</p>
                )}
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                  })}
                  type="text"
                  rows="4"
                />
              </label>

              <button type="submit">Send</button>
            </form>
          )}
        </section>
      </div>
    </Layout>
  );
}
