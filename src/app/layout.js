import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/PlayfairDisplay-VariableFont_wght.ttf", // Use absolute path
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MGaber Portfolio</title>
        <meta name="description" content="Mohamed Gaber - Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
