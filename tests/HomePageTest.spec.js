const {test,expect} = require('@playwright/test')

test('Home page',async ({page}) => {

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = page.title();
    console.log("Page title --->",pageTitle);

    const pageURL =page.url();
    console.log("Page url ------>",pageURL);

    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://www.demoblaze.com/');


    await page.close();

}
)