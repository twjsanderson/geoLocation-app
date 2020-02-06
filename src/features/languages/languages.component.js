import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

// constants
import languageContent from '../../constants/toolInformation';

// components
import ToolDescriptions from '../toolDescriptions';

const LanguagesView = (props) => {
    const { currentLanguage, otherLanguages, getCurrentLanguage, clearLanguages } = props;
    const content = languageContent.languageContent;
    const blueStyle = { style: 'm-4 bg-secondary text-center rounded' };

    return (
        <section id="languages-view">
            <Container>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                    style={blueStyle.style}
                />
                <Row>
                    <Col className='text-center bg-secondary rounded'>
                        {
                            currentLanguage ? 
                                <Row className='justify-content-center align-items-center'>
                                    <h3>Your primary language for browsing the web is:</h3>  
                                    <h3 className='px-2 first'>{currentLanguage}</h3>
                                </Row>
                                : null
                        }
                        <Row className='justify-content-center align-items-center'> 
                            { 
                                otherLanguages !== null ?
                                    <h3>The alternate language(s) stored in your browser are:</h3> 
                                    : null
                            }
                            {
                                otherLanguages !== null ? 
                                    // eslint-disable-next-line
                                    otherLanguages.map((otherLanguage, index) => {
                                        if (otherLanguage !== otherLanguages[index - 1]) { 
                                            return <h3 className='px-2 second' key={index}>{otherLanguage}</h3>
                                        } 
                                    })
                                    : null
                            }
                        </Row>
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