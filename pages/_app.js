import layoutStyle from '../styles/Layout.module.css'
import navbarStyle from '../styles/Navbar.module.css'

export default function simpleBlog({ Component, pageProps }) {
    return (
        <div className={layoutStyle.container}>
            {/* <div className={layoutStyle.navegationBar}>
                <img className={navbarStyle.perfilImg} src="coffe.png"></img>
                <p>Dostoievski Batista</p>
                <a href="https://github.com/dostoievskiab" ><GitHubIcon /></a>
            </div> */}
            <div className={layoutStyle.content}>
                <Component {...pageProps} />
            </div>
        </div>
    )
}