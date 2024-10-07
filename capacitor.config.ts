import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.mypwaapp',
  appName: 'my-pwa-app',
  webDir: 'build',
  server:{
    url:"http://localhost:3001/",
    cleartext:true
  }
};

export default config;
