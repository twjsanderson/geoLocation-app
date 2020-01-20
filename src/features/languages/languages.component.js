import React from 'react';
import { Button } from 'react-bootstrap';

const LanguagesView = (props) => {
    const { currentLanguage, otherLanguages, getCurrentLanguage, clearLanguages } = props;
    return (
        <section id="languages-view">
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
        </section>
    )
}

export default LanguagesView;