import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = props => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  return (
    <div>
      <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
        <Field
          name="title"
          component={renderInput}
          type="text"
          label="Enter Title"
        />
        <Field
          name="description"
          component={renderInput}
          type="text"
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = "Must enter a title";
  }
  if (!formValues.description) {
    error.description = "Must enter a description";
  }
  return error;
};

export default reduxForm({ form: "streamCreate", validate })(StreamForm);
