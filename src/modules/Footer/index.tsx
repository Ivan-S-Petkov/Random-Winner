import React from 'react'
import styled from 'styled-components'
import DonateButton from './components/DonateButton'

type Props = {}

function Footer({ }: Props) {
    return (
        <Wrapper>
            <Content> Support the creator - Donate via <DonateButton /></Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: Center;
    align-items: center;
`

const Content = styled.div`
    height: 100%;
`

export default Footer