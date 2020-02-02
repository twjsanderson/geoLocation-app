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
                            This tool peaks at your browser settings to find out what language(s) you use.
                        </h4>
                        <h3>How?</h3>
                        <p>
                            Have you ever wondered why every web page you go to seems to know what language 
                            you speak? Your browser does a great job of storing this information for websites
                            use. 
                        </p>
                        <h3>Who?</h3>
                        <p>
                            This information helps modern browsers translate foriegn languages into 
                            something you can understand. For multilingual users, browsers also store
                            a list of alternate language choices that you may have used or interacted 
                            with in the past. 
                        </p>
                        <h3>Why?</h3>
                        <p>
                            In order to capture the attention of users who speak different languages,
                            websites will often utilize this feature to increase their market share around 
                            the world. It can also be utilized by hackers to gain a small but vital piece 
                            of information about a potential target.
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
                            Show Language Information
                        </Button>
                        <Button
                            className='tool-button'
                            onClick={() => clearLanguages()}
                        >
                            Clear Language Information
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LanguagesView;