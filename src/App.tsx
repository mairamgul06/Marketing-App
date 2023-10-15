
import Header from './component/header/Header'
import Main from './component/main/Main'
import Footer from './component/footer/Footer'
import styel from './app.module.scss'
function App() {

  return (
    <div className={styel.App}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
