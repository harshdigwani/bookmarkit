import firebase from '../firebase';
const db = firebase.firestore();

export const getShareText = async (uid) => {
    const result = await db.collection('sharetext').where("uid", "==", uid).orderBy("timestamp").get()

    let screams = [];
    result.forEach(doc => {
        screams.push({ id: doc.id, ...doc.data() });
    })

    console.log(screams[0]);
    return screams[0];
}

export const setShareText = async ({ text, uid }) => {
    db.collection('sharetext').doc(uid).set({
        text,
        uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
}
