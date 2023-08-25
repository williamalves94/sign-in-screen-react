import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3388aa;
    h1{
        font-size: 40px;
        margin-bottom: 30px;
    }
`;

export const SignUpDiv = styled.div`
    background-color: #fff;
    width: 400px;
    height: auto;
    border: none;
    text-align: center;
    flex-direction: column;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 0px 10px 40px #00000056;
`;

export const Form = styled.form`    
    input{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        border: 2px solid #4B0082;
        border-radius: 12px;
        background-color: #fff;
        outline: none;
        padding: 10px;
        color: #000;
        font-weight: 600;
        font-size: 15px;       
    }
`;

export const ButtonSignUp = styled.button`
    width: 100%;
    height: 40px;
    background-color: #4B0082;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #fff;
    &:hover{
            background-color:#581688;
        }
`;

export const TextDiv = styled.div`
    font-size: 14px;
`;
