const selectors = {
    urls: {
        google: 'https://www.google.com/',
        moroSystems: 'https://www.morosystems.cz/',
        moroCareer: 'https://www.morosystems.cz/kariera/'
    },
    google: {
        title: 'Google',
        acceptCookiesButton: '//button[.//div[text()="Přijmout vše"]]',
        searchInput: '#APjFqb',
        searchButton: 'input[aria-label="Hledat Googlem"]',
        moroLink: 'a[href="https://www.morosystems.cz/"] h3.LC20lb'
    },
    moroSystems: {
        acceptCookiesButton: '//div[text()="Přijmout vše"]',
        careerLink: 'a=Kariéra'
    }
};

export default selectors;
