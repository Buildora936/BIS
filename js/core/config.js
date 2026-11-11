
/**
 * BROOKS INTERNATIONAL SCHOOL
 * Central application configuration
 */

const APP_CONFIG = Object.freeze({
  app: {
    name: "Brooks International School",
    shortName: "BIS",
    version: "1.0.0",
    environment: "development",
    defaultLanguage: "fr",
    supportedLanguages: ["fr", "en", "es"]
  },

  urls: {
    website: window.location.origin,
    login: "/login.html",
    signup: "/signup.html",
    dashboard: "/student/dashboard.html"
  },

  supabase: {
    url: "",
    anonKey: ""
  },

  features: {
    studentPortal: true,
    teacherPortal: true,
    parentPortal: true,
    adminPortal: true,
    liveClasses: false,
    onlinePayments: false
  },

  security: {
    sessionRefresh: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

export default APP_CONFIG;
