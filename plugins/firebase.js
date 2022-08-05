import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_API_KEY,
  authDomain: process.env.NUXT_ENV_AUTH_DOMAIN,
  projectId: process.env.NUXT_ENV_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_ENV_APP_ID,
  measurementId: process.env.NUXT_ENV_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
