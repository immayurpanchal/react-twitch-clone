import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  responseGoogle = res => {
    const { email, name, imageUrl } = res.profileObj;
    this.props.setProfile(email, name, imageUrl);
  };

  responseGoogleLogout = () => {
    this.props.removeProfile();
  };

  render() {
    return (
      <div>
        {this.props.isSignedIn && (
          <GoogleLogout
            clientId="883748642736-e3f7grf3ibrhu3d4ikb971vp5ta01t02.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.responseGoogleLogout}
          />
        )}
        {!this.props.isSignedIn && (
          <GoogleLogin
            clientId="883748642736-e3f7grf3ibrhu3d4ikb971vp5ta01t02.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.profile.email };
};

const mapDispatchToProps = dispatch => {
  return {
    setProfile: (email, name, imageUrl) =>
      dispatch(signIn({ email, name, imageUrl })),
    removeProfile: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
