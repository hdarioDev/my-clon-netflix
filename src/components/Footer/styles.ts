import styled from "styled-components";


export const Footer = styled.div`
    height: 200px;
    /* background-color: blue; */
    color: white;
    @media (max-width: 768px) {
        height: 380px;
    }

`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
    margin-top: 80px;
    padding: 0 40px ;
        cursor: pointer;
`


export const InformationContainer = styled.div`
     padding: 10px 40px;
    /* background: cyan; */
    margin-bottom: 20px;
    display: flex;
  
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: row;
         flex-wrap: wrap;
         justify-content: start;
    }

`

export const Items = styled.div`
color: gray;
font-size:13px;
p{
    margin: 10px;
    cursor: pointer;
  
}

`