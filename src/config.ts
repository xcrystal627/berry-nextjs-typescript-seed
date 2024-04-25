import { LAYOUT_CONST } from 'constant';

// types
import { ConfigProps } from 'types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days'
};

export const FIREBASE_API = {
  apiKey: '',
  authDomain: 'berry-material-react.firebaseapp.com',
  projectId: 'berry-material-react',
  storageBucket: 'berry-material-react.appspot.com',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

export const AUTH0_API = {
  client_id: '',
  domain: ''
};

export const AWS_API = {
  poolId: '',
  appClientId: ''
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/sample-page';

export const HORIZONTAL_MAX_ITEM = 6;

const config: ConfigProps = {
  layout: LAYOUT_CONST.VERTICAL_LAYOUT, // vertical, horizontal
  drawerType: LAYOUT_CONST.DEFAULT_DRAWER, // default, mini-drawer
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light', // light, dark
  presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
  container: false
};

export default config;
