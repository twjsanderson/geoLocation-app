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