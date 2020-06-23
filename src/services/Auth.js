import firebase from '../firebase';

// Signup 
export const signUp = async (email, password) => {
    try {
        let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (user) localStorage.setItem("user", JSON.stringify(user));
    }
    catch (err) {
        if (err.code === "auth/email-already-in-use") {
            alert("Email already is in use");
        }
        if (err.code === "auth/invalid-email") {
            alert("Incorect Email Format");
        }

        console.error(err.message);
    }
}

// SignIn
export const signIn = async (email, password) => {
    try {
        let user = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(user);
        if (user) localStorage.setItem("user", JSON.stringify(user));
    }
    catch (err) {
        if (err.code === "auth/user-not-found") {
            alert("Email or pass is incorect");
        }
        if (err.code === "auth/invalid-email") {
            alert("Incorect Email Format");
        }

        console.error(err.message);
    }
}

// IsAuthenticated
export const isLoggedIn = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        return false;
    }
};


// AuthListener
export const isAutheticated = () => {
    const user = localStorage.getItem("user");
    console.log(JSON.parse(user));
    if (user) return user;

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            return user;
        }
        else {
            localStorage.removeItem("user");
        }
    })
}


// SignOut
export const signOut = () => {
    firebase.auth().signOut()
        .then(() => { console.log("signing out..."); localStorage.removeItem("user") })
        .catch(err => console.error(err));
}