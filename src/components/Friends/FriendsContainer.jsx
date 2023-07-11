import React from "react";
import { connect } from "react-redux";
import axios, * as others from "axios";
import setFriendProfile from "../../redux/friends-reducer";
import Friends from "../Friends/Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setFriendProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Friends {...this.props} friendPage={this.props.friendPage} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  friendPage: state.friendPage,
});

export default connect(mapStateToProps, { setFriendProfile })(FriendsContainer);
