const { I } = inject();

module.exports = {
  // fields: {
  //   password: '#password',
  //   username: '#username',
  // },
  loginButton: '.button is-outlined',
  resetButton: '.button is-primary',

  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  }
}
