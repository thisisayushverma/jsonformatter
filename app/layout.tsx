import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AnalyticsTracker from "./components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON Formatter",
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
          Free JSON Formatter & Validator Online | Beautify & Minify JSON
        </title>
        <meta
          name="description"
          content="Free online JSON formatter and validator to beautify, minify, view, edit and share JSON instantly. Supports syntax highlighting and error detection."
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Free JSON Formatter & Validator Online"
        />
        <meta
          property="og:description"
          content="Format, minify, beautify, validate JSON with syntax highlighting and error detection."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/preview.png"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free JSON Formatter & Validator Online"
        />
        <meta
          name="twitter:description"
          content="Format, minify, beautify, validate JSON with syntax highlighting and sharing features."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/preview.png"
        />

        <meta name="author" content="Ayush Verma" />
        <meta
          name="keywords"
          content="JSON formatter, JSON validator, JSON beautifier, JSON prettify, JSON minify, online JSON tool, JSON editor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
