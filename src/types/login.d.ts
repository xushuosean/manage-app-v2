
export interface loginForm {
  username: string,
  password: string,
}

export interface loginSetup {
  form: loginForm,
  submitForm: () => void
}
