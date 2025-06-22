import type { NextConfig } from "next";
import { isProd } from "./app/common/utils";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/travelate-public" : "",
  // assetPrefix: isProd ? "https://ronbyronn.github.io/travelate-public/" : "",
};

export default nextConfig;
