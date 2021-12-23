import React from 'react'
import { useEffect, useState, useRef } from 'react'
import cityActions from '../redux/actions/cityActions'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Comments = (props) => {

    let signed = props.user
    const [com, setCom] = useState(false)
    const inputComment = useRef()

    useEffect(() => {

        signed = props.user
        console.log("algo")
        //props.addComment(props.itineraryId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user, props.itineraries])

    const handleSubmit = async (comment)=>{
        await props.addComment(props.itineraryId, comment)
        
    }

    const handleSubmitInput = (e) => {
        e.preventDefault()
        handleSubmit(inputComment.current.value)
        inputComment.current.value = ''
        
    }

    const handleDelete = async (commentId)=>{
        await props.deleteComment(props.itineraryId, commentId)
        .then(res=>console.log(res))
        
    }
    const handleDeleteClick = (e, commentId)=>{
        e.preventDefault()
        handleDelete(commentId)
    }

    return (
        <>

            <div className='comments-container comments'>
                <div className="comments">
                    {(props.itineraries) &&
                        props.itineraries.map(itinerary => {
                            return (
                                (itinerary.comments)?
                                    <div key={itinerary._id}>
                                        {
                                            (itinerary._id == props.itineraryId)&&
                                            itinerary.comments.map(comment => {
                                                return (
                                                    <div className='comment-wrapper' key={comment._id}>
                                                        <p className='comment'>{comment.body}</p>
                                                        <a href="" onClick={()=>{}}>🖊</a>
                                                        <a href="" onClick={(e)=>handleDeleteClick(e,comment._id)}>✖</a>
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
                            
                            <input className="comment-input" ref={inputComment} type="text" id="comment" name="comment" placeholder={signed?"Write your comment here":"You must sign in to comment"} disabled={signed?false:true} autoComplete="off" required/>
                            <button type="submit" className='comment-button'><b>➡</b></button>
                </form>
            </div>

        </>
    )
}




const mapDispatchToProps = {
    addComment: cityActions.addComment,
    deleteComment: cityActions.deleteComment
}
const mapStateToProps = (state) => {

    return {
        itineraries: state.cityReducer.itineraries,
        commentsFlag: state.cityReducer.commentsFlag,
        user: state.usersReducer.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)