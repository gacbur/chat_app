import { FC } from 'react'

import { FaMoon, FaSun } from 'react-icons/fa'

import { HeaderWrapper, Logo, ThemeSwitchBtn } from './HeaderElements'

type HeaderProps = {
    theme: string,
    toggleTheme: (() => void)
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
    return (
        <HeaderWrapper>
            <Logo to="/">
                <h2>
                    Chat App
                </h2>
            </Logo>
            <ThemeSwitchBtn
                type='button'
                onClick={() => toggleTheme()}
            >
                {theme === 'light' ? <FaMoon className="icon" /> : <FaSun className="icon" />}
            </ThemeSwitchBtn>
        </HeaderWrapper>
    )
}

export default Header
