import React from 'react'
import { styled } from 'styled-components'
import Header from './Header'
import Section from './Section'



function Home() {

  return (
    <Container>
        <Header/>
        <Section
            title="Model 3"
            description="Lease from $399/mo"
            backgroundImg="Homepage-Model-3-Desktop-LHD.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Demo Drive"
        />
        <Section
            title="Model Y"
            description="View Inventory"
            backgroundImg="Homepage-Model-Y-Global-Desktop.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Demo Drive"
        />
         <Section
            title="Model S"
            description="View Inventory"
            backgroundImg="Model-S-homepage-desktop.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Demo Drive"
        />
         <Section
            title="Model X"
            description="View Inventory"
            backgroundImg="Homepage-Model-X-Desktop-LHD.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Demo Drive"
        />
        <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            backgroundImg="425_HP_SolarPanels_D.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Learn More"
        />
        <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg="Homepage-SolarRoof-Desktop-Global.avif"
            leftbtnText = "Order Now"
            rightbtnText = "Learn More"
        />
        <Section
            title="Acessories"
            description=" "
            backgroundImg="Desktop_Accessories.avif"
            leftbtnText = "Shop Now"
            
        />
    </Container>
  )
}

export default Home


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
`