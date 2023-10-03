import { NavigationProp } from '@react-navigation/core';
import axios from 'axios';
import React from 'react';
import { Text, View } from 'react-native';

interface OAuth2RedirectHandlerProps {
  data: string;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  from: string;
}

async function requestToken(
  code: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  from: string,

) {
  if(from === 'Kakao') {
  axios
    .post('http://moyeota.shop/api/users/kakao', {
      authorizationCode: code,
    })
    .catch(function (e) {
      console.log(e);
    });
  } else if(from === 'Google') {
    axios
    .post('http://moyeota.shop/api/users/google', {
      authorizationCode: code,
    })
    .catch(function (e) {
      console.log(e);
    });
  } else if(from === 'Naver') {
    axios
    .post('http://moyeota.shop/api/users/naver', {
      authorizationCode: code,
    })
    .catch(function (e) {
      console.log(e);
    });
  }
  navigation.navigate("Guide" as never);

}

function OAuth2RedirectHandler({
  data,
  navigation,
  from,
}: OAuth2RedirectHandlerProps) {
  const exp = 'code=';
  const condition = data.indexOf(exp);

  if (condition !== -1) {
    console.log('condition', condition);
    const requestCode = data.substring(condition + exp.length).split('&')[0];
    requestToken(requestCode, navigation, from);
    console.log('requestCode', requestCode);
  }
}

export default OAuth2RedirectHandler;
