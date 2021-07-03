const { I } = inject();

module.exports = {
  fields: {
    password: '#password',
    username: '#username',
  },
  loginButton: '.button:nth-child(1)',
  resetButton: '.reset-password-link',

  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },
  resetPassword() {
    I.click(this.resetButton);
  }
}
