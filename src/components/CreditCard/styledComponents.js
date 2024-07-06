import styled from 'styled-components'

export const MainContainer = styled.div`
   display:flex;
   flex-direction:column;
   min-height:100vh;

   @media screen and (min-width:768px){
      flex-direction:row;
   }
`
export const CreditCardContainer = styled.div`
   background-color:#3b4b69;
   height:55vh;
   background-size:cover;
   padding:30px;
   @media screen and (min-width:768px){
      width:50%;
      padding:50px;
      min-height:100vh;
   }
`
export const Heading = styled.h1`
   font-family:"Roboto";
   color:#ffffff;
   text-align:center;
   margin-bottom:10px;
`
export const HorizontalLine = styled.hr`
   border:#ffd773 solid 2px;
   width: 50%;
   margin-right:93px;
   @media screen and (min-width:768px){
      width:30%;
      margin-right:200px;
   }
`
export const CardImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height:60%;
  background-size:cover;
  border-radius:25px;
  margin-top:40px;
  padding-top:70px;
  padding-left:30px;
  @media screen and (min-width:768px){
     margin-top:100px;
  }
`

export const CardNumberAndName = styled.p`
  color:#d3d9e0;
   font-family:"Roboto";
   font-weight:600;
   @media screen and (min-width:768px){
     font-size:30px;
     font-weight:500;
  }
`
export const Paragraph = styled.p`
   color:#c3cad9;
   font-size:10px;
   font-family:"Roboto";
   margin-top:40px;
   @media screen and (min-width:768px){
      font-size:18px;
  }
`

export const FormContainer = styled.div`
   padding:40px 20px ;
   @media screen and (min-width:768px){
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items-center;
      padding: 0px 60px;
  }
`
export const Container = styled.div`
   background-color:#ffffff;
   width:100%;
   border-radius:10px;
   box-shadow:#d3d9e0 5px 5px 10px 5px;
   padding:20px;
   @media screen and (min-width:768px){
    width:100%;
    padding:50px;
  }
`
export const FormHeading = styled.h1`
  color:#475569;
  font-family:"Roboto";
  text-align:center;
  @media screen and (min-width:768px){
     margin-bottom:60px;
  }
`
export const InputText = styled.input`
  padding:15px 30px;
  width:100%;
  border:#c3cad9 solid 1px;
  border-radius: 5px;
  color:#475569;
  font-family:"Roboto";
  font-weight:400;
  outline:none;
  margin-bottom:20px;
  @media screen and (min-width:768px){
     margin-bottom:30px;
  }
`
