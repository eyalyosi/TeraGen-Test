import styled from 'styled-components'
import ReviewPreview from './ReviewPreview';


const Section = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
gap:10px;
margin-top:20px
`

const ReviewList = ({ reviews, remove }) => {
    console.log(reviews);
    return (
        <Section>
            {reviews.map((review) => {
                return <ReviewPreview key={review._id} review={review} remove={remove}/>
            })}
        </Section>
    )

}

export default ReviewList