import login from './login.hbs'

const people = ['Yehuda Katz', 'Alan Johnson', 'Charles Jolley']

export const loginPage = () => {
  return login({ people })
}
