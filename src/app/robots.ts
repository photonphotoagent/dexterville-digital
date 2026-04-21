import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jennifer-jordan-pmhnp.vercel.app/sitemap.xml",
    host: "https://jennifer-jordan-pmhnp.vercel.app",
  };
}
