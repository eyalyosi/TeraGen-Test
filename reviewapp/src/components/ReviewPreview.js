import styled from 'styled-components'

const ReviewCard = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 30px 12px 15px;
height: 54px;
background: rgba(255, 255, 255, 0.1);
border-radius: 10px 10px 10px 2px;
&:hover {
    background: rgba(255, 255, 255, 0.25);
}
`

const Title = styled.div`
display: flex;
align-items: center;
color: #FFFFFF;
`

const Text = styled.div`
display: flex;
align-items: center;
color: rgba(255, 255, 255, 0.5);
`

const Button = styled.button`
position: absolute;
width: 20px;
height: 20px;
right: -5px;
top: -5px;
background: #DC2D2D;
color: #FFFFFF;
border: 0px;
border-radius: 10px;
&:hover {
    cursor: pointer
}
`

const ReviewPreview = ({ review }) => {

    return (
        <ReviewCard>
            <Title>{review.title}</Title>
            <Text>{review.text}</Text>
            <Button>X</Button>
        </ReviewCard>
    )
}

export default ReviewPreview