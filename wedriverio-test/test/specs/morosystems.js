import selectors from '../pageobjects/selectors';
import { clickWhenVisible, setValueAndVerify } from '../helper/utils';

describe('Morosystems Kariera search', () => {

    it('should open google search page', async () => {
        await browser.url(selectors.urls.google);
        await expect(browser).toHaveTitle(selectors.google.title);
    });

    it('should accept cookies on Google web page', async () => {
        const acceptButtonGoogle = await browser.$(selectors.google.acceptCookiesButton);
        await clickWhenVisible(acceptButtonGoogle);
    });

    it('should search MoroSystems page in google search', async () => {
        const searchInput = await browser.$(selectors.google.searchInput);
        const searchButton = await browser.$(selectors.google.searchButton);
        await setValueAndVerify(searchInput, 'MoroSystems');
        await clickWhenVisible(searchButton);
    });
    
    it('should open MoroSystems web page', async () => {
        const moroLink = await browser.$(selectors.google.moroLink);
        await clickWhenVisible(moroLink);
    });

    it('should accept cookies on MoroSystems web page', async () => {
        const acceptButtonMoro = await browser.$(selectors.moroSystems.acceptCookiesButton);
        await clickWhenVisible(acceptButtonMoro);
    });

    it('should open MoroSystems - Kariera web page', async () => {
        const careerLink = await browser.$(selectors.moroSystems.careerLink);
        await clickWhenVisible(careerLink);
        await expect(browser).toHaveUrl(selectors.urls.moroCareer);
    });

});
