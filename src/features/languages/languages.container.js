import React, { useState } from 'react'
import detectBrowserLanguage from 'detect-browser-language'
import languageCodes from '../../constants/languageCodes';

// components
import LanguagesView from './languages.component';

const Languages = () => {
    const [currentLanguage, setCurrentLanguage] = useState(null);
    const [otherLanguages, setOtherLanguages] = useState(null);

    const getOtherLanguages = () => {
        let browserCodes = window.clientInformation.languages;
        return browserCodes.map(browserCode => {
            let code = browserCode.slice(0, 2);
            return languageCodes[code];
        });
    }
    
    const getCurrentLanguage = () => {
        let languageCode = detectBrowserLanguage().slice(0, 2);
        let language = languageCodes[languageCode];
        setCurrentLanguage(language);  
        let backupLanguages = getOtherLanguages();
        setOtherLanguages(backupLanguages);
    };

    const clearLanguages = () => {
        setCurrentLanguage(null);
        setOtherLanguages(null);
    };

    return (
        <section id="languages">
            <LanguagesView 
                currentLanguage={currentLanguage}
                otherLanguages={otherLanguages}
                getCurrentLanguage={getCurrentLanguage}
                clearLanguages={clearLanguages}
            />
        </section>
    )
}

export default Languages;