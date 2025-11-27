import type { NextConfig } from "next";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";
const nextConfig = {
  webpack: (config:any) => {
    config.plugins.push(
    new MonacoEditorWebpackPlugin({
    languages: ['javascript', 'typescript', 'css', 'html', 'json'],
    })
    );
    return config;
    },

    experimental: {
      turbo: false   // ⛔ Turn off Turbopack
    },
};
export default nextConfig;
