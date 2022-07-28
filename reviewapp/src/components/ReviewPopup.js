import AddReview from "./AddReview"
import styled from 'styled-components'


import { useEffect, useState } from 'react';
import { reviewService } from '../services/ReviewService'

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 20px 0px;
width: 470px;
height: 549px;
background: linear-gradient(72.2deg, #39454C 0%, #64757E 100%);
border-radius: 20px 0px 0px 20px;
`

const ReviewPopup = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [reviews, setReviews] = useState([])

    const onChangeTitle = (value) => {
        if (value.length > 255) return
        setTitle(value);
    }
    
    const add = async (event) => {
        event.preventDefault();
        await reviewService.add({ title, text })
        setText('')
        setTitle('')
    }

    return (
        <Section>
            <AddReview title={title} onChangeTitle={onChangeTitle} text={text} setText={setText} add={add}/>
        </Section>
    )
}


export default ReviewPopup