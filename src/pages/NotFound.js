import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="not-found">
    <div className="container container--normal">
      <main className="not-found__main">
        <h2 className="not-found__title">404 - הדף לא נמצא</h2>
        <p className="not-found__note">
          ייתכן שהדף שאתה מחפש יוסר 
          <br />
          השם שלה השתנה או אינו זמין באופן זמני.
        </p>
        <Link className="go-to-homepage-link" to="/">עבור לעמוד הבית</Link>
      </main>
    </div>
  </section>
);

export default NotFound;