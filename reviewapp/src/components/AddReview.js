import styled from 'styled-components'

const Section = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 18px 20px 20px;
gap: 15px;
width: 430px;
height: 132px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
border-radius: 10px;
`

const TitleFrame = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 10px;
width: 100%;
`

const TitleCount = styled.div`
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: right;
color: #C4D2DC;
span {
    color: #64757E;
}
`

const InputTitle = styled.input`
width: 330px;
font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
border: 0px;
color: #39454C;
::placeholder {
    color: #C4D2DC;
}
`

const TextFrame = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 10px;
width: 100%;
height: 45px;
`

const InputText = styled.input`
width: 313px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
border: 0px;
color: #39454C;
::placeholder {
    color: #C4D2DC;
}
`

const AddButton = styled.button`
width: 64px;
height: 45px;
border: 0px;
background: #FF206F;
border-radius: 10px;
color: #FFFFFF;
&:hover {
    cursor: pointer
}
`

const Hr = styled.hr`
border: 1px solid #EBEFF7;
width: 100%;
background: #EBEFF7;
`

const AddReview = ({ title, onChangeTitle, text, setText, add }) => {
    return (
        <Section action="" onSubmit={add}>
            <TitleFrame>
                <InputTitle type="text" placeholder='Enter review title' value={title} onChange={(event) => onChangeTitle(event.target.value)} />
                <TitleCount><span>{title.length}</span>/255</TitleCount>
            </TitleFrame>
            <Hr />
            <TextFrame>
                <InputText type="text" placeholder='Write your review text...' value={text} onChange={(event) => setText(event.target.value)} />
                <AddButton>Add</AddButton>
            </TextFrame>
        </Section>
    )
}

export default AddReview