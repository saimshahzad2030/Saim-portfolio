
import "./globals.css";

export const metadata = {
  title: "Saim Shahzad",
  description: "Developed by Saim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body >{children}</body> 
    </html>
  );
}
