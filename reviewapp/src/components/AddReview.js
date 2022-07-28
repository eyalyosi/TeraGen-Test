import styled from 'styled-components'


const Section = styled.section`
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
padding: 0px;
gap: 10px;

width: 390px;
height: 18px;
`
const TitleCount = styled.div`
width: 50px;
height: 18px;

font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

display: flex;
align-items: center;
text-align: right;

color: #64757E;

`

const InputTitle = styled.input`
width: 330px;
height: 18px;

/* Body/Body bold */

font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

display: flex;
align-items: center;

/* Neutral/500 */
border: 0px;
color: #C4D2DC;
`

const TextFrame = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 10px;

width: 390px;
height: 45px;
`

const InputText = styled.input`
width: 313px;
height: 18px;

/* Body/Body */

font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

display: flex;
align-items: center;

/* Neutral/500 */
border: 0px;
color: #C4D2DC;
`

const AddButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px 11px;
gap: 5px;

width: 64px;
height: 45px;

/* Neutral/400 */
border: 0px;
background: #FF206F;
border-radius: 10px;
color: #FFFFFF;
&:hover {
    cursor: pointer
}

`

const Hr = styled.hr`
width: 390px;
height: 1px;

background: #EBEFF7;

`

const AddReview = ({ title, setTitle, text ,setText}) => {

    return (
        <Section>
            <TitleFrame>
                <InputTitle type="text" placeholder='Enter review title' value={title} onChange={(event) => setTitle(event.target.value)} />
                <TitleCount>0/255</TitleCount>
            </TitleFrame>
            <Hr />
            <TextFrame>
                <InputText type="text" placeholder='Write your review text...' value={text} onChange={(event) => setText(event.target.value)}/>
                <AddButton>Add</AddButton>
            </TextFrame>
        </Section>
    )

}


export default AddReview