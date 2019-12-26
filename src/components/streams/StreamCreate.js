import React from "react";
import { connect } from "react-redux";
import { streamCreate } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = props => {
  const onSubmit = formValues => {
    props.streamCreate(formValues);
  };

  return (
    <div>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { streamCreate })(StreamCreate);

// 1. Easy way to wrap reduxForm and connect
// export default compose(
//   connect(null, { streamCreate }),
//   reduxForm({ form: "streamCreate", validate })
// )(StreamCreate);

/* 
// 2. Another way to wrap reduxForm and connect
const formWrapped = reduxForm({ form: "streamCreate", validate });
export default connect(null, { streamCreate })(formWrapped);
*/
