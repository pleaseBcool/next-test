import Head from 'next/head'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAVjNZsrimhKKXHtqZb9KrZHwk6DAU6zYc",
  authDomain: "next-test-507ee.firebaseapp.com",
  projectId: "next-test-507ee",
  storageBucket: "next-test-507ee.appspot.com",
  messagingSenderId: "158872745337",
  appId: "1:158872745337:web:fdd631bcd3eda2a1f36ba8",
  measurementId: "G-FLSVFR24TX"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
console.log(app);
export default function Home() {
  return (
    <div>
      <Head>
        <title>WebTest</title>
      </Head>
    <h1>Hello</h1>
    </div>
  )
}
