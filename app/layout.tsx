import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AnalyticsTracker from "./components/AnalyticsTracker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON Formatter | Fast Format, Validate & Convert JSON Online",
  description: "Change your JSON into beutify json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EYEJ0H07MY"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EYEJ0H07MY');
            `,
          }}
        />

        <title>
          JSON Formatter | Format, Validate & Convert JSON Online Free
        </title>

        <meta name="google-adsense-account" content="ca-pub-2690113099326425">
        <meta
          name="description"
          content="Free online JSON formatter and validator to beautify, minify, view and edit JSON. Convert CSV, YAML & XML to JSON with syntax highlighting and error detection."
        />

        <link rel="canonical" href="https://json.ayushverma.dev/" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ayush Verma" />
        <meta
          name="keywords"
          content="JSON formatter, JSON validator, JSON beautifier, JSON minify, JSON editor, JSON prettify, CSV to JSON, YAML to JSON, XML to JSON, developer tools"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="JSON Formatter – Format, Validate & Convert JSON Online"
        />
        <meta
          property="og:description"
          content="Fast JSON formatting and validation with error detection. Convert CSV, YAML & XML to JSON online instantly."
        />
        <meta
          property="og:image"
          content="https://json.ayushverma.dev/preview.png"
        />
        <meta property="og:url" content="https://json.ayushverma.dev/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JSON Formatter – Format & Convert JSON Online"
        />
        <meta
          name="twitter:description"
          content="Beautify, minify, validate JSON and convert CSV / YAML / XML to JSON instantly. Free developer tool."
        />
        <meta
          name="twitter:image"
          content="https://json.ayushverma.dev/preview.png"
        />

        <link rel="icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JSON Formatter & Validator",
              url: "https://json.ayushverma.dev",
              description:
                "Beautify, validate and minify JSON with syntax highlighting.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "All",
              author: { "@type": "Person", name: "Ayush Verma" },
            }),
          }}
        />
      </head>

      <body className={`antialiased w-full h-screen`}>
        <AnalyticsTracker />
        <Providers>
          <Navbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
