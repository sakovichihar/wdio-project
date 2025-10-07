import { Then } from '@wdio/cucumber-framework';

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(flashAlert).toBeExisting();
    await expect(flashAlert).toHaveText(expect.stringContaining(message));
});