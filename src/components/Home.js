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
            <Section
                title="Model 3"
                description="Order online for touches delivery"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
                backgroundImage="model-3.jpg"
            />
            <Section
                title="Model X"
                description="Order online for touches delivery"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
                backgroundImage="model-x.jpg"
            />
            <Section
                title="Model Y"
                description="Order online for touches delivery"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
                backgroundImage="model-y.jpg"
            />
            <Section
                title="Solar Panels"
                description="Money-back guarantee"
                leftButtonText="Custom Order"
                rightButtonText="Learn More"
                backgroundImage="solar-panel.jpg"
            />
            <Section
                title="Solar For new roofs"
                description="Money-back guarantee"
                leftButtonText="Custom Order"
                rightButtonText="Learn More"
                backgroundImage="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                description="Money-back guarantee"
                leftButtonText="Order Now"
                backgroundImage="accessories.jpg"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`