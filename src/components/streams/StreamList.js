import React from "react";
import { fetchStreams } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.googleId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      );
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
  };

  renderList = () => {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }

    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.profile.googleId,
    isSignedIn: state.profile.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStreams: () => dispatch(fetchStreams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
