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
    description: 'This tool uses the browser to identify your Browser Type, Operating System and Device Type.',
    how: 'The BOM also allows developers to access information about the type of device you are using and the specific systems that run on that device.',
    who: 'Businesses and hackers are always looking for simple ways to assess the capabilities of a user\'s system.',
    why: 'Hackers will utilize this kind of data to help them identify vulnerabilities that are specific to a certain device model or operating system version.'
};


export default { locationContent, connectionContent, systemContent };


