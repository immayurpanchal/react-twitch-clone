import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class GoogleAuth extends Component {
	responseGoogle = (res) => {
		const { email, name, imageUrl } = res.profileObj;
		this.props.setProfile(email, name, imageUrl);
	};

	render () {
		return (
			<div>
				<GoogleLogin
					clientId='883748642736-e3f7grf3ibrhu3d4ikb971vp5ta01t02.apps.googleusercontent.com'
					buttonText='Login'
					onSuccess={this.responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
				<GoogleLogout
					clientId='883748642736-e3f7grf3ibrhu3d4ikb971vp5ta01t02.apps.googleusercontent.com'
					buttonText='Logout'
					isSignedIn
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setProfile : (email, name, imageUrl) => dispatch({ type: 'SUCCESS', payload: { email, name, imageUrl } })
	};
};

export default connect(null, mapDispatchToProps)(GoogleAuth);
