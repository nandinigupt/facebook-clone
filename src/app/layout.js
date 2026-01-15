import "./globals.css";

export const metadata = {
  title: "Facebook Auth Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f2f5]">
        {children}
      </body>
    </html>
  );
}
