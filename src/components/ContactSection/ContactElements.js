import styled from 'styled-components'

export const ContactContainer = styled.div`
    color: #fff;
    //background:  ${({ lightBackground }) => ( lightBackground ? '#fefcfb' : '#010606')};
    background: #fefcfb;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    align-items: center;
`

export const TopLine = styled.p`
    color: #1282a2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spasing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const ContactForm = styled.form`
    margin-top: 50px;
    transition: all 4s ease-in-out;
    width: 600px;
    height: auto;
    padding-bottom: 20px;

    @media screen and (max-width: 700px) {
        width: 400px;
    }
`

export const ContactInput = styled.input`
    color: #000;
    width: 600px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 3px solid #1282a2;
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 16px;

    @media screen and (max-width: 700px) {
        width: 400px;
    }
`

export const ContactLabel = styled.label`
    color: #010606;
`

export const ContactTextArea = styled.textarea`
    resize: none;
    overflow-y: auto;
    width: 600px;
    height: 200px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 3px solid #1282a2;
    color: #000;
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 16px;

    @media screen and (max-width: 700px) {
        width: 400px;
    }
`

export const ContactButton = styled.input`
    border-radius: 50px;
    background: #1282a2;
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '14px 48px' : '12px 30px')};
    color: #010606;
    font-size: ${({ fontBig }) => ( fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fefcfb;
    }
`