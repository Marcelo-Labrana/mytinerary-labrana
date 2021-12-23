import React from 'react'
import { useEffect, useState, useRef } from 'react'
import cityActions from '../redux/actions/cityActions'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';

const Comments = (props) => {

    let signed = props.userToken
    const [edit, setEdit] = useState(false)
    const inputComment = useRef()
    const inputEdit = useRef()
    const [comId, setComId] = useState('')
    

    useEffect(() => {

        signed = props.userToken
        //props.addComment(props.itineraryId)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user, props.itineraries, props.userToken])

    const handleSubmit = async (comment) => {
        await props.addComment(props.itineraryId, comment, localStorage.getItem('token'))
            .then(res => console.log(res))
    }

    const handleSubmitInput = (e) => {
        e.preventDefault()
        handleSubmit(inputComment.current.value)
        inputComment.current.value = ''

    }

    const handleSubmitEdit = async (comment, commentId) => {
        await props.editComment(props.itineraryId, comment, commentId, localStorage.getItem('token'))
            .then(res => console.log(res))
    }

    const handleEditInput = (e) => {
        e.preventDefault()
        handleSubmitEdit(inputEdit.current.value, comId)
        inputEdit.current.value = ''
        setComId('')
    }

    const handleEdit = (e, commentId) => {
        e.preventDefault()
        setEdit(!edit)
        setComId(commentId)
    }

    const handleDelete = async (commentId) => {
        await props.deleteComment(props.itineraryId, commentId, localStorage.getItem('token'))
            .then(res => console.log(res))

    }

    const Toast = (commentId) => {
        Swal.fire({
            title: 'Do you want to delete this comment?',
            text: "Just to be sure",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(commentId)
                Swal.fire(
                    'Deleted!',
                    'Your comment has been deleted.',
                    'success'
                )
            }
        })
    }


    const handleDeleteClick = (e, commentId) => {
        e.preventDefault()
        Toast(commentId)
        //handleDelete(commentId)
    }



    return (
        <>
            <ToastContainer />
            <div className='comments-container comments'>
                <div className="comments">
                    {(props.itineraries) &&
                        props.itineraries.map(itinerary => {
                            return (
                                (itinerary.comments) ?
                                    <div key={itinerary._id}>
                                        {
                                            (itinerary._id == props.itineraryId) &&
                                            itinerary.comments.map(comment => {
                                                return (
                                                    <div className='comment-wrapper' key={comment._id}>
                                                        
                                                        <img src={comment.img} className='comment-img'/>
                                                        {edit && comId == comment._id ?
                                                            <form className='comment-input' onSubmit={handleEditInput}>
                                                                <input className="comment" ref={inputEdit} type="text" id="editComment" name="editComment" autoComplete="off" required />
                                                            </form>
                                                            : <p className='comment'>{comment.body}</p>
                                                        }
                                                        {/*console.log("1: "+props.userToken.response._id+"2: "+comment.user)*/}
                                                        {
                                                        (props.userToken&&(props.userToken.response._id==comment.user))&&<>
                                                        <a href="" onClick={(e) => { handleEdit(e, comment._id) }}>🖊</a>
                                                        <a href="" onClick={(e) => handleDeleteClick(e, comment._id)}>✖</a>
                                                        </>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    : <div>
                                        <p className='comment'>There are no comments for this itinerary</p>
                                    </div>
                            )
                        }
                        )
                    }
                </div>
                <form className='comment-input' onSubmit={handleSubmitInput}>

                    <input className="comment-input" ref={inputComment} type="text" id="comment" name="comment" placeholder={signed ? "Write your comment here" : "You must sign in to comment"} disabled={signed ? false : true} autoComplete="off" required />
                    <button type="submit" className='comment-button'><b>➡</b></button>
                </form>
            </div>

        </>
    )
}




const mapDispatchToProps = {
    addComment: cityActions.addComment,
    deleteComment: cityActions.deleteComment,
    editComment: cityActions.editComment
}
const mapStateToProps = (state) => {

    return {
        itineraries: state.cityReducer.itineraries,
        commentsFlag: state.cityReducer.commentsFlag,
        user: state.usersReducer.user,
        userToken: state.usersReducer.userToken
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)