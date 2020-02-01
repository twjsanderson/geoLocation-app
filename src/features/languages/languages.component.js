import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

const LanguagesView = (props) => {
    const { currentLanguage, otherLanguages, getCurrentLanguage, clearLanguages } = props;
    return (
        <section id="languages-view">
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            Your Languages
                        </h1>
                        <h4 className='p-4'>
                            This tool uses the browser to find your location on a map with your current 
                            latitude and longitude.
                        </h4>
                        <h3>How?</h3>
                        <p>
                            Using something called the Browser Object Model (or BOM), developers can 
                            get the latitude and longitude of a device or computer that navigates 
                            to their website. If you want to try this yourself check out our free 
                            exercise page here: <br /> Exercise #1 
                        </p>
                        <h3>Who?</h3>
                        <p>
                            This technique (and many variations of it) are used all over the internet 
                            by small businesses, large corporations, hackers, governments agencies 
                            and personal websites. 
                        </p>
                        <h3>Why?</h3>
                        <p>
                            Geo location tracking is usually employed by businesses who want to learn 
                            more about their customers, help them find physical storefronts and make 
                            it easier to connect users with relevant content. This functionality helps 
                            developers do everything from track user engagement to find out where people 
                            live! 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        {
                            currentLanguage ? <h2>Your primary language is: <span className='language'>{currentLanguage}</span></h2> : null
                        }
                        {
                                otherLanguages !== null ?
                                otherLanguages.map(otherLanguage => { 
                                    return otherLanguage !== currentLanguage ?
                                        <h2 key={otherLanguage}>You may also use/understand: <span className='language'>{otherLanguage}</span></h2>
                                        : null
                            })
                            : null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center pb-3'>
                        <Button
                            className='tool-button'
                            onClick={() => getCurrentLanguage()}
                        >
                            Show Language
                        </Button>
                        <Button
                            className='tool-button'
                            onClick={() => clearLanguages()}
                        >
                            Clear Language
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LanguagesView;