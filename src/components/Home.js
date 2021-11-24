import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touches delivery"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
                backgroundImage="model-s.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`