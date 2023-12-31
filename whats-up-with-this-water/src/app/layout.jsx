import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          padding: "2em",
          paddingTop: "0",
          paddingBottom: "0",
          height: "100%",
        }}
      >
        <nav>
          <ol
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5vw",
              fontSize: "24px",
              backgroundColor: "#FBEEC1",
              height: "60px",
              paddingRight: "90px",
              borderRadius: "40px",
              margin: "10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <a
                href="./"
                style={{
                  marginRight: "30px",
                  justifySelf: "left",
                  paddingLeft: "30px",
                }}
              >
                Home
              </a>
              <a href="">
                <img
                  src="./img/mrbags.png"
                  alt="Logo"
                  style={{ maxHeight: "40px" }}
                />
              </a>
            </div>
          </ol>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
