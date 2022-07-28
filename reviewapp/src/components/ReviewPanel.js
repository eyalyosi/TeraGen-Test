import styled from 'styled-components'
import AddReview from "./AddReview"
import ReviewList from './ReviewList';

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 20px 0px;
width: 470px;
/* height: 549px;*/ 
background: linear-gradient(72.2deg, #39454C 0%, #64757E 100%);
border-radius: 20px 0px 0px 20px;
`

const ReviewPanel = ({title, text, setText, add, reviews, onChangeTitle, remove}) => {
    return (
            <Section>
                    <AddReview title={title} onChangeTitle={onChangeTitle} text={text} setText={setText} add={add} />
                    <ReviewList reviews={reviews} remove={remove} />
            </Section>
    )
}

export default ReviewPanel