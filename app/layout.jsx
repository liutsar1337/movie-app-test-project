import '@styles/global.css'
import Footer from '@components/Footer'

export const metadata = {
    title: "Test TMDB App",
    desciption: "Discover & Share Your Favorite Movies"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body suppressHydrationWarning={true}>
            <main className="App">{children}</main>
            <footer><Footer/></footer>
        </body>

    </html>
    )
}

export default RootLayout