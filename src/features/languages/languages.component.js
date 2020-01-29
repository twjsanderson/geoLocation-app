import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LanguagesView = (props) => {
    const { currentLanguage, otherLanguages, getCurrentLanguage, clearLanguages } = props;
    return (
        <section id="languages-view">
            <Container>
                <Row>
                    <Col>
                        <h1>Title</h1>
                        <h3>details of section</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{currentLanguage}</h1>
                        {
                            otherLanguages !== null ?
                                otherLanguages.map(otherLanguage => { 
                                    return otherLanguage !== currentLanguage ?
                                        <ul>
                                            <h1 key={otherLanguage}>{otherLanguage}</h1>
                                        </ul>
                                        : null
                            })
                            : null
                        }
                        <Button
                            onClick={() => getCurrentLanguage()}
                        >
                            Show Language
                        </Button>
                        <Button
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