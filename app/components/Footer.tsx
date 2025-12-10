import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-background text-text mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            JSON Formatter
          </h3>
          <p className="text-sm leading-relaxed">
            A simple and powerful online tool to format, validate, minify,
            beautify, and inspect JSON data. Convert JSON to CSV or XML
            instantly. No login required — fast, free, and secure.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ Validate JSON Syntax</li>
            <li>✔ Beautify & Minify JSON</li>
            <li>✔ Tree View Explorer</li>
            <li>✔ Custom Tab Spacing</li>
            <li>✔ Download as CSV or TXT</li>
            <li>✔ Completely Free to Use</li>
          </ul>
        </div>

        {/* How to Use */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">How to Use</h3>
          <ul className="space-y-2 text-sm">
            <li>1️⃣ Open the JSON Formatter tool</li>
            <li>2️⃣ Paste or upload your JSON</li>
            <li>3️⃣ Choose validate, beautify, or minify</li>
            <li>4️⃣ Copy or download the formatted output</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Use Cases
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• API & Web App Debugging</li>
            <li>• Viewing Server Logs</li>
            <li>• Formatting Config Files</li>
            <li>• Working with Large JSON Files</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Can I format large JSON?
            </h3>
            <p className="text-sm">
              Yes! Our tool handles large files easily and processes them
              quickly.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Is my data safe?
            </h3>
            <p className="text-sm">
              Absolutely. Nothing is stored on our servers — all processing
              occurs in your browser.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Do I need coding skills?
            </h3>
            <p className="text-sm">
              No programming required. Anyone can format, validate, or view JSON
              effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full text-center py-6 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} JSON Formatter. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
