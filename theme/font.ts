// A system font stack avoids a render-blocking third-party request and keeps
// production builds deterministic in restricted and offline environments.
export const siteFont = { variable: 'font-system-sans' } as const;
