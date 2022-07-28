import styled from 'styled-components'
import ReviewPanel from "./ReviewPanel"
import ReviewActionPanel from './ReviewActionPanel'
import { useState } from 'react';
import { reviewService } from '../services/reviewService'
import useFetchData from '../services/useFetchData'

const Section = styled.section`
width: 830px;
display: flex;
`

const ReviewPopup = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [x, setX] = useState(0)
    const { loading, error, data: reviews } = useFetchData(x)

    const add = async (event) => {
        event.preventDefault();
        await reviewService.add({ title, text })
        setText('')
        setTitle('')
        setX(x + 1)
    }

    const onChangeTitle = (value) => {
        if (value.length > 255) return
        setTitle(value);
    }

    const remove = async (id) => {
        await reviewService.remove(id)
        setX(x - 1)
    }

    if (!reviews && !reviews?.length) {
        return (
            <div>Loading</div>
        )
    } else return (
        <Section>
            <ReviewPanel title={title} text={text} reviews={reviews} add={add} setText={setText} onChangeTitle={onChangeTitle} remove={remove} />
            <ReviewActionPanel reviewsLength={reviews.length} />
        </Section>
    )
}

export default ReviewPopup