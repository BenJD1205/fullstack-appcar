import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Navbar} from '../../components/navbar';
import {TopSection} from './TopSection';
import {BookCar} from '../../components/bookCar';
import {Marginer} from '../../components/marginer';
import {BookingSteps} from './bookingSteps';
import {AboutUs} from './aboutUs';
import {TopCars} from './topCars';
import {Footer} from '../../components/footer';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        overflow-y-hidden
    `}
`

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="4em" />
            <BookCar />
            <Marginer direction="vertical" margin="4em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="4em" />
            <AboutUs />
            <Marginer direction="vertical" margin="4em" />
            <TopCars />
            <Footer />
        </PageContainer>
    )
}