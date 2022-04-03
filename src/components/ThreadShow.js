import "../css/Thread.css"
import axios from "axios"

const ThreadShow = (props) => {

    const deleteThread = (id) => {
        axios.delete(("https://polar-bayou-46017.herokuapp.com/api/thread/" + id),
            {
                headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
            }  
        )
        .then(response => window.location.replace("https://cryptic-everglades-41257.herokuapp.com/"))
    }

return(
                <div className="thread" href={"/thread/" + props.thread.id} key={props.thread.id}  >
                    <li>
                        <div className="header">
                            <h4>{props.thread.threadName}</h4>
                        </div>
                        <div className="body">
                            {props.thread.content}
                        </div>
                        <div className="footer">
                            {props.thread.createdAt.substring(0,10)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {props.thread.user.username}
                        </div>
                    </li>
                    { props.thread.user.userId == localStorage.getItem("userId") ?
                    <button onClick={() => deleteThread(props.thread.id)}>delete</button>
    :
    null
    }
                </div>
    );
}

export default ThreadShow;