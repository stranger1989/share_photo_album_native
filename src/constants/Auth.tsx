/* eslint-disable @typescript-eslint/camelcase */
import Amplify, { I18n } from 'aws-amplify';

import {
  REACT_APP_IDENTITY_POOL_ID,
  REACT_APP_REGION,
  REACT_APP_USERPOOL_ID,
  REACT_APP_USERPOOL_WEBCLIENT_ID,
  REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
  REACT_APP_APPSYNC_APIKEY,
  REACT_APP_S3_BUCKET,
} from 'react-native-dotenv'

const jaAuthDict = {
  ja: {
    'Back to Sign In': 'サインイン画面に戻る',
    Confirm: '確認',
    'Confirm Sign Up': 'サインアップの確認',
    'Confirmation Code': '確認コード',
    'Create Account': '新規登録',
    'Create a new account': 'アカウントの新規登録',
    'Create account': '新規登録',
    Email: 'メールアドレス',
    'Enter your code': '確認コードを入力してください',
    'Enter your password': 'パスワードを入力してください',
    'Enter your username': 'ユーザー名を入力してください',
    'Forget your password? ': 'パスワードをお忘れの方 ',
    'Have an account? ': 'アカウント登録済みの方 ',
    Hello: 'こんにちは ',
    'Incorrect username or password': 'ユーザー名またはパスワードが異なります',
    'Lost your code? ': 'コードを紛失した方 ',
    'No account? ': 'アカウント未登録の方 ',
    Password: 'パスワード',
    'Phone Number': '電話番号',
    'Resend Code': '確認コードの再送',
    'Reset password': 'パスワードのリセット',
    'Reset your password': 'パスワードのリセット',
    'Send Code': 'コードの送信',
    'Sign In': 'サインイン',
    'Sign Out': 'サインアウト',
    'Sign in': 'サインイン',
    'Sign in to your account': 'サインイン',
    'User does not exist': 'ユーザーが存在しません',
    Username: 'ユーザー名',
    'Username cannot be empty': 'ユーザー名は必須入力です',
    'Username/client id combination not found.': 'ユーザー名が見つかりません',
  },
};

export const amplifyConfig: Function = () => {
  Amplify.configure({
    Auth: {
      identityPoolId: REACT_APP_IDENTITY_POOL_ID,
      region: REACT_APP_REGION,
      userPoolId: REACT_APP_USERPOOL_ID,
      userPoolWebClientId: REACT_APP_USERPOOL_WEBCLIENT_ID,
    },
    Storage: {
      AWSS3: {
        bucket: REACT_APP_S3_BUCKET,
        region: REACT_APP_REGION,
      },
    },
    aws_appsync_graphqlEndpoint: REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
    aws_appsync_region: REACT_APP_REGION,
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    aws_appsync_apiKey: REACT_APP_APPSYNC_APIKEY,
  });
  I18n.putVocabularies(jaAuthDict);
  I18n.setLanguage('ja');
};

// Session Action Type
export const FETCH_SESSION_START = 'FETCH_SESSION_START';
export const FETCH_SESSION_SUCCEED = 'FETCH_SESSION_SUCCEED';
export const FETCH_SESSION_FAIL = 'FETCH_SESSION_FAIL';

// SignOut Action Type
export const FETCH_SIGNOUT_START = 'FETCH_SIGNOUT_START';
export const FETCH_SIGNOUT_SUCCEED = 'FETCH_SIGNOUT_SUCCEED';
export const FETCH_SIGNOUT_FAIL = 'FETCH_SIGNOUT_FAIL';

// Auth Initialize
export const AUTH_INITIALIZE = 'AUTH_INITIALIZE';
