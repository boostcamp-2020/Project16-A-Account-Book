import React from 'react';
import facebookSVG from 'assets/svg/facebook.svg';
import api from 'apis/oauth';
import { FacebookButton, Wrap } from './style';

const onFacebookLogin = async () => {
  const result = await api.getFacebookOAuth();
  const url = result.facebookAuthUrl;
  window.location.href = url;
};

const FacebookLogin = () => {
  return (
    <FacebookButton size="xl" onClick={onFacebookLogin}>
      <Wrap>
        <img
          src={facebookSVG}
          width="24px"
          alt="github"
          style={{
            backgroundColor: 'white',
            borderRadius: '50px',
            border: '2px solid white',
          }}
        />
        <div>FACEBOOK LOGIN</div>
      </Wrap>
    </FacebookButton>
  );
};

export default FacebookLogin;
