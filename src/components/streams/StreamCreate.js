import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { streamCreate } from "../../actions";
import streams from "../../apis/streams";

const StreamCreate = props => {
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
    // streams.post(formValues);
    streams.post("/", formValues);
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

// 1. Easy way to wrap reduxForm and connect
export default compose(
  connect(null, { streamCreate }),
  reduxForm({ form: "streamCreate", validate })
)(StreamCreate);

/* 
// 2. Another way to wrap reduxForm and connect
const formWrapped = reduxForm({ form: "streamCreate", validate });
export default connect(null, { streamCreate })(formWrapped);
*/
