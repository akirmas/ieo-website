import React, { useContext } from 'react';

import Image from '../components/shared/Image';

import Form from '../components/vendors/elements/Form';

import { AppContext } from '../context/app';
import useFetch from '../hooks/useFetch';

import { renderText } from '../helpers';

const ContactUs = () => {
  const { pages: {
    'contact-us': {
      title,
      subtitle,
      hero,
      form
    }
  } } = useContext(AppContext);

  const { data, loading } = useFetch(form.url);

  return (
    <section className="contact-us">
      <div className="container container--normal">
        <header className="contact-us__header">
          <h2 className="contact-us__title">{title}</h2>
          <h5 className="contact-us__subtitle">{renderText(subtitle)}</h5>
        </header>
        <main className="contact-us__main">
          {(loading === false) && (
            <form className="contact-form">
              <header className="contact-form__header">
                <h4 className="contact-form__title">{data.title}</h4>
              </header>
              <main className="contact-form__main">
                <Form inputs={data.inputs} />
              </main>
            </form>
          )}
          <Image {...hero} />
        </main>
      </div>
    </section>
  );
};

export default ContactUs;