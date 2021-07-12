import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const HeaderWrapper = styled.div`
    height:7vh;
    display: flex;
    padding: 0em 2em;
    border-bottom:1px solid #cdd9e5;

`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.TextColorMain};
    padding: 1em 1em;
    text-decoration: none;
    transition: .3s;

    h2{
        font-size: 23px;
    }

    i{
        display: flex;
        font-size: 26px;
        margin-left: .3em;
    }
`

export const ThemeSwitchBtn = styled.button`
    cursor:pointer;
    background-color: transparent;
    border:none;
    margin-left: auto;
    margin-right: 2em;

    .icon{
        color:#cdd9e5;
        font-size: 28px;
        transition: .3s;
    }
`