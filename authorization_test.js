const {expect} = require('chai');
// import chai from 'chai';
// const {expect} = chai;
Feature('authorization');
Before(({I}) => { // or Background
  I.amOnPage('/');
});

Scenario.skip('Демо пользователь может авторизоваться', ({I, mainPage}) => {
  mainPage.login('demo', 'demo');
  I.see('Hi demo!');
})

Scenario.skip('Пользователь может запросить сброс пароля', ({I, mainPage}) => {
  mainPage.resetPassword();
  I.see('Reset your password');
})

Scenario('Пользователь может запросить содержимое страницы', async({I}) => {
  let response = await I.sendGetRequest('/posts');
  expect(response.status).to.equal(200);
})