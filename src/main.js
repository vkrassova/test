import { loginPage } from './pages/login/login'

window.addEventListener('load', () => {
  const path = window.location.pathname

  console.log(path)

  const app = document.querySelector('#app')

  if (path === '/chat') {
    console.log('chat')
    // app.innerHTML = loginPage()
  }

  // if (path === '/') {
  //   app.innerHTML = loginPage()
  //   console.log('chat page')
  // }
})
