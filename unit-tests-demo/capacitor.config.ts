import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-codetrix-unit-tests',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '[Your Server Client ID]',
      forceCodeForRefreshToken: true,
      grantOfflineAccess: true,
    },
  },
};

export default config;
