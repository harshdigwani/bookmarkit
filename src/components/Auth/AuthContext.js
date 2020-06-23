import React, { useEffect, useState } from 'react'
import firebase from '../../firebase';

export const AuthContext = React.createContext({
    user: null,
    isAuthorised: false,
    authoriseUser: () => { }
});

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         firebase.auth().onAuthStateChanged(setCurrentUser);
//     }, [])
//     return (
//         <AuthContext.Provider value={{ currentUser }}>
//             {children}
//         </AuthContext.Provider>

//     )
// }
