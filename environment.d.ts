declare global {
  // namespace NodeJS {
  interface importMeta {
    VUE_APP_GEOLOC_API: string;
    VUE_APP_WEATHER_API: string;
    NODE_ENV: "development" | "production";
    PORT?: string;
    PWD: string;
  }
  // }
}

export {};
