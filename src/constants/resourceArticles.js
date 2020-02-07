const resources = [
    { 
        id: 1,
        title: 'Privacy Primer',
        address: 'https://www.varonis.com/blog/data-privacy/',
        imageAddress: 'data:image/jpeg;base64,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',
        alt: 'privacy primer',
        details: 'An excellent primer on the realities of data security in 2020. This blog article, written by Jeff Petters, covers everything from international privacy laws and regulations to consumer facing privacy advice.',
        ref: 'https://www.varonis.com/blog/author/jpetters/',
        refText: 'Checkout more articles by Jeff'
    },
    {
        id: 2,
        title: 'Web Tracking 101',
        address: 'https://www.howtogeek.com/115483/htg-explains-learn-how-websites-are-tracking-you-online/',
        imageAddress: 'https://www.howtogeek.com/wp-content/uploads/2012/06/xcctv-cameras-header.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.g4Yplgdf_z.jpg',
        alt: 'web tracking',
        details: 'A a great complementary article to check out after you have used the Brower Power app. Tech writer, Chris Hoffman, outlines some common tools (like cookies, yummy...) that modern websites use to track your every move.',
        ref: 'https://www.howtogeek.com/author/chrishoffman/',
        refText: 'Get to know Chris Hoffman'
    },
    {
        id: 3,
        title: 'Data Breaches',
        address: 'https://en.wikipedia.org/wiki/List_of_data_breaches',
        imageAddress: 'https://www.healthcareitnews.com/sites/hitn/files/breach-collection-hero-stock2-712.jpg',
        alt: 'data breaches list',
        details: 'A straight up terrifying wikipedia list of data breaches disclosed by major companies from around the world. These include year, the number of records exposed, organization type and method of intrusion. It happens all the time...',
        ref: 'https://en.wikipedia.org/wiki/List_of_data_breaches',
        refText: 'Dig into the 300+ references used to build this list'
    },
    {
        id: 4,
        title: 'The Art of Hacking',
        address: 'https://www.hackthissite.org/',
        imageAddress: 'https://data.htscdn.org/themes/Dark/images/header.jpg',
        alt: 'hack this site link',
        details: 'Are interested in a deep dive in to the world of hacking? HackThisSite.org is a longtime training ground for anyone who wants get their hands dirty and see what it takes hack the web. Don\'t worry it\'s totally free and legal to use.' ,
        ref: 'https://www.hackthissite.org/info/about',
        refText: 'For more info check out their about page'
    },
    {
        id: 5,
        title: 'Who Has My Data?',
        address: 'https://www.wired.com/story/wired-guide-personal-data-collection/',
        imageAddress: 'https://cdn.app.compendium.com/uploads/user/a7c086f7-9adb-4d2c-90fa-e26177af8317/c2dea8f7-8c26-44de-ae5f-5dc019485c8c/Image/e0cff98a66bcbe0f97c885d4ba7dbce0/social_media_banner.png',
        alt: 'who has my data',
        details: 'This guide by Wired staff writer, Louise Matsakis, gives a comprehensive overview of how companies collect your data, how much it\'s worth to them, how they get it and what they use it for (past and present).',
        ref: 'https://www.wired.com/author/louise-matsakis/',
        refText: 'Learn about Louise and check out her other work'
    },
    {
        id: 6,
        title: 'What\'s It Worth?',
        address: 'https://www.forbes.com/sites/stephanzoder/2019/08/06/how-much-is-your-data-worth/#386c212470fc',
        imageAddress: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2019/12/Value-proposition-1.jpg?fit=900%2C563&ssl=1',
        alt: 'what my data worth',
        details: 'But seriously... how much is my personal data worth? This lovely article by Stephan Zoder puts a price on personal data in the digital age. That\'s right, Wall Street is here and they smell blood. How much is your physical address worth to the Fortune 500?',
        ref: 'https://www.forbes.com/sites/stephanzoder/#5f02041a1c2d',
        refText: 'Check out Stephen\'s other work on data driven business'
    }
];

export default { resources };