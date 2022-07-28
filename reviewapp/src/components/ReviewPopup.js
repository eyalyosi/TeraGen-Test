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

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

const ReviewPopup = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [reviews, setReviews] = useState([])
  
    return (
        <Section>
            <AddReview title={title} setTitle={setTitle} text={text} setText={setText}/>
        </Section>
    )

}


export default ReviewPopup