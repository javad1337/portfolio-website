// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 👇 NEW — static-export mode
    output: "export",

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;