import firebase from '../firebase';
const db = firebase.firestore();

export const getAllBookmarks = async (uid) => {
    const result = await db.collection('bookmarks').where("uid", "==", uid).orderBy("title").get()

    let screams = [];
    result.forEach(doc => {
        screams.push({ id: doc.id, ...doc.data() });
    })

    return screams;
}

export const addBookmark = async ({ title, url, uid }) => {
    db.collection('bookmarks').add({
        title,
        url,
        uid
    })
}

export const deleteBookmark = async (id) => {
    alert("delete bookmark")
    db.collection('bookmarks').doc(id).delete().then(function () {
        console.log(`Document deleted Successfully with id ${id}`)
    }).catch(err => console.error(err));
}