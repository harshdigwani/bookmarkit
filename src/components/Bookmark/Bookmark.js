import React, { Component } from 'react';
import { isLoggedIn } from '../../services/Auth';
import { getAllBookmarks, addBookmark, deleteBookmark } from '../../services/Bookmark';
import Base from '../Base/Base';
import './Bookmark.css';
import Spinner from '../Core/Spinner';

class Bookmark extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [],
            uid: "",
            url: "",
            title: "",
            loading: true
        }
    }

    async componentDidMount() {
        const user = isLoggedIn().user;
        const bookmarks = await getAllBookmarks(user.uid);
        this.setState({
            uid: user.uid,
            bookmarks,
            title: "",
            url: "",
            loading: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    appendBookmark = async (e) => {
        e.preventDefault();
        const { title, url, uid } = this.state;
        if (!title && !url) return
        addBookmark({ title, url, uid })
        const bookmarks = await getAllBookmarks(uid);
        this.setState({ bookmarks, title: "", url: "" });
    }


    removeBookmark = async (id) => {
        deleteBookmark(id);
        let bookmarks = this.state.bookmarks;
        bookmarks.splice(bookmarks.findIndex(b => b.id === id), 1)
        this.setState({
            bookmarks
        })
    }

    render() {
        const { bookmarks, loading } = this.state
        return (
            <Base>
                <div className="container">
                    <h1 className="bookmark-heading"><u>Add Bookmark!</u></h1>

                    <form className="flex-col bookmark-form">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleChange} />

                        <label>URL</label>
                        <input
                            type="text"
                            name="url"
                            placeholder="Url"
                            value={this.state.url}
                            onChange={this.handleChange} />

                        <button onClick={this.appendBookmark}>Add Bookmark</button>
                    </form>


                    {loading && <Spinner />}
                    {bookmarks.length > 0 ? (<>
                        <hr style={{ width: "80%" }} />
                        <h1 className="bookmark-heading"><u>Your Bookmarks!</u></h1>
                    </>) : <h5 className="bookmark-heading">You Don't have any Bookmarks!</h5>}
                    <br />
                    {bookmarks.length > 0 && Object.values(bookmarks).map(bookmark => (
                        <div className="bookmark" key={bookmark.id}>
                            <p>
                                {String(bookmark.title).toUpperCase()}
                                <br />
                                <u onClick={() => window.open(bookmark.url)}>{bookmark.url}</u>
                            </p>
                            <span onClick={() => this.removeBookmark(bookmark.id)} className="fa fa-trash fa-2x delete-icon" />
                        </div>
                    ))}
                </div>
            </Base>
        )
    }
}

export default Bookmark;