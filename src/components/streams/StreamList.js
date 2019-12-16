import React from "react";
import { connect } from "react-redux";

const StreamList = props => {
  const {
    profile: { name, email, imageUrl }
  } = props;
  return (
    <div>
      {email && (
        <div>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <img src={imageUrl} alt="user" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(mapStateToProps)(StreamList);
