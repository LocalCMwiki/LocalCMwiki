import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

export default function () {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInAnonymously(auth)
        .then(() => {
          console.log("Login");
        })
        .catch((error) => {
          this.$router.push("/error");
        });
    }
  });
}
