import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quarkcms.quarkapp',
  appName: 'quarkapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
