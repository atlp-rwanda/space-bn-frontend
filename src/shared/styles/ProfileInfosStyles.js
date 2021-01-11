import styled from 'styled-components';

export const LabelWrapper = styled.label`
    position: absolute;
    margin-top: 10px;
    padding-right: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

export const InputWrapper = styled.div`
    margin-left: 100px;
    position: relative;
    @media only screen and (max-width: 450px){
        margin-left: 25%
    }
    @media only screen and (max-width: 330px){
        margin-left: 28%
    }
`;