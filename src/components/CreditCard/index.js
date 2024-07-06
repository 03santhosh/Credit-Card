import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  Heading,
  CardImageContainer,
  CardNumberAndName,
  Paragraph,
  HorizontalLine,
  FormContainer,
  Container,
  FormHeading,
  InputText,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const onChangeCardNum = event => setCardNum(event.target.value)
  const onChangeCardName = event => setCardName(event.target.value)
  const name = cardName.toUpperCase()
  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardImageContainer data-testid="creditCard">
          <CardNumberAndName>{cardNum}</CardNumberAndName>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <CardNumberAndName>{name}</CardNumberAndName>
        </CardImageContainer>
      </CreditCardContainer>
      <FormContainer>
        <Container>
          <FormHeading>Payment Method</FormHeading>
          <InputText
            type="text"
            placeholder="Card Number"
            value={cardNum}
            onChange={onChangeCardNum}
          />
          <InputText
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeCardName}
          />
        </Container>
      </FormContainer>
    </MainContainer>
  )
}

export default CreditCard
