import React, { Component } from 'react';
// import Profile from '../../components/Profile/Profile';
import ProfileWithAds from '../../components/ProfileWithAds/ProfileWithAds';

class MyProfile extends Component {
  render() {
    return (
      <div>
        {/* <Profile /> */}
        <ProfileWithAds {...this.props} />
      </div>
    );
  }
}

export default MyProfile;

