import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore @react-native-async-storage/async-storage module
    // This is a React Native dependency that MetaMask SDK tries to import but isn't needed for web
    const webpack = require("webpack");
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^@react-native-async-storage\/async-storage$/,
      })
    );

    // Also add a fallback to prevent module resolution errors
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "@react-native-async-storage/async-storage": false,
      };
    }

    return config;
  },
};

export default nextConfig;
