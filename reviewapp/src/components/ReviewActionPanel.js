import styled from 'styled-components'

const Section = styled.section`
background: #FFFFFF;
width: 360px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 40px;
gap: 40px;
border-radius: 0px 20px 20px 0px;
`

const ActionSection = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 40px;
gap: 40px;
`

const ClearAllButton = styled.button`
background: #FFFFFF;
padding: 10px 20px 11px 10px;
border: 1px solid #FFDDDD;
border-radius: 10px;
width: 280px;
height: 45px;
color: #DC2D2D;
font-weight:bold;
text-align: left;
&:hover {
    cursor: pointer
}
`

const SaveButton = styled.button`
background: #FF206F;
width: 280px;
color:#FFFFFF;
height: 45px;
border-radius: 10px;
border: 0px;
font-weight:bold;
&:hover {
    cursor: pointer
}
`

const TopSection = styled.div`
font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 29px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 5px;
span {
    color: #FF206F;
}
`

const MiddleSection = styled.div`
text-align: left
`

const ActionButton = styled.button`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 10px 11px;
gap: 5px;
width: 280px;
height: 45px;
background: #EBEFF7;
border-radius: 10px;
border: 0px;
font-weight: bold;
color: #64757E;
&:hover {
    cursor: pointer
}
`

const ReviewActionPanel = ({ reviewsLength }) => {

    return (
        <Section>
            <ActionSection>
                <TopSection><span>{reviewsLength}</span>app reviews </TopSection>
                <MiddleSection>Write the texts our accounts will use when reviewing your app on the App Store (Minimum 50 reviews).
                </MiddleSection>
                <ActionButton>Learn how to add reviews</ActionButton>
                <ActionButton>Import from file</ActionButton>
                <ActionButton>+10 generic reviews</ActionButton>
            </ActionSection>
            <ClearAllButton>X Clear all reviews</ClearAllButton>
            <SaveButton>Save</SaveButton>
        </Section>
    )

}


export default ReviewActionPanel