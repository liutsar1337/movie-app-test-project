import "@styles/global.css";
import Footer from "@components/Footer";
import { ReactNode } from "react";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Test TMDB App",
  description: "Discover & Share Your Favorite Movies",
};

interface PropTypes {
  children: ReactNode;
}

const RootLayout: React.FC<PropTypes> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="App">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
