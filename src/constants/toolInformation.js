const locationContent = {
    title: 'Geolocator',
    description: 'This tool grabs your latitude and longitude from the browser and plots it on a map with your approximate location.',
    how: 'Using something called the Browser Object Model (or BOM), developers can get the latitude and longitude of your device when you navigate to their website.',
    who: 'This feature is extremely common and widely used by small businesses, large corporations, hackers and governments agencies across many devices.',
    why: 'Geolocation is often used by businesses who want to learn more about their customers habits, help them find physical storefronts and of course, track their location in real time!'
};

const connectionContent = {
    title: 'Connection Check',
    description: 'This tool allows a website to see your internet connection type and approximate speed.',
    how: 'Your browser is constantly logging information about your system to help developers optimize performance and understand the needs of their users. Through the BOM, developers are able to access information about your real time internet connection to their website.',
    who: 'This data is of particular interest to any company that wants to sell you products online. If it takes your device 15 seconds to load a webpage because you live in an area with poor internet connectivity, then companies may alter their marketing and sales strategies to get your business in different ways.',
    why: 'The simple fact that someone might still be using outdated 2G technology lets businesses know who their customers are and narrows down what their needs might be. It also helps paint a picture for data scientists and governments about how local economies are adpating to changes in technology.'
};

const systemContent = {
    title: 'System Identifier',
    description: 'This tool identifies your browser type, operating system and device type.',
    how: 'The BOM also allows developers to access information about the type of device you are using and the specific systems that run on that device.',
    who: 'Tech companies and hackers are always looking for easy ways to assess the capabilities of a user\'s system. Over time this data can tell a story about someones brand loyalty, spending power and how seriously they take digital security.',
    why: 'Hackers will utilize this kind of data to help them identify vulnerabilities that are specific to a certain device model or operating system version. Businesses may use this data to steal market share from competitors by advertising to their customers.'
};

const languageContent = {
    title: 'Language Estimator',
    description: 'This tool peaks at your browser settings to find out what language(s) you use.',
    how: 'Have you ever wondered why every website you visit seems to know what language you speak? Your browser does a great job of making this available to developers so they can display content in the correct language for you.',
    who: 'This information helps modern browsers translate foriegn languages into something you can understand. For multilingual users, browsers also store a list of alternate language choices that you may have used or interacted with in the past.',
    why: 'Websites will often utilize this feature to expand their global audience. It can also be utilized by hackers to gain a small but vital piece of information about a target. If a malicious hacker knows that you surf the web using multiple languages they can direct attacks at you from different vectors that might catch you off guard.'
};

const trackingContent = {
    title: 'Activity Tracker',
    description: 'This tool uses the browser to track data about your recent activity on a website.',
    how: 'Every time you scroll down a page or click a button, there is the potential for a webpage to capture that event for analysis. These events are easy to track in both the BOM and the front end code of any website.',
    who: 'Any website or app can track this data with the Google analytics platform or customized analytics tools built by a web developer.',
    why: 'This information is vital for any online business to understand how users interact with their website. Details about where web traffic comes from and how users spend time on a website constantly stored for sales and marketing analysis.'
};


export default { locationContent, connectionContent, systemContent, languageContent, trackingContent };


