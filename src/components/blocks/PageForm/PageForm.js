import React from "react";

import useFetch from "../../../hooks/useFetch";
import "./PageForm.scss";

import Form from "../../vendors/elements/Form";

const PageForm = ({ form }) => {
  const { data, loading } = useFetch(form);

  return (
    <>
      {" "}
      {loading === false && (
        <form className="page-form">
          <header className="page-form__header">
            <h4 className="page-form__title">{data.title}</h4>
          </header>
          <main className="page-form__main">
            <Form inputs={data.inputs} />
          </main>
        </form>
      )}
    </>
  );
};

export default PageForm;
