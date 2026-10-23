# Analytics and SEO measurement

The public site uses Google Analytics 4 only after a visitor explicitly accepts analytics. The integration measures the marketing site and handoffs to `app.doitforjesus.com`; it does not claim that a handoff became a completed signup or login.

## Deployment

1. Create or reuse a GA4 property with one web stream for `https://www.doitforjesus.com`.
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to the Vercel **Production** environment only. Do not expose the variable to Preview or Development.
3. Deploy, accept analytics on the production site, and verify the tag and events with Google Tag Assistant and GA4 DebugView.

When the environment variable is missing or invalid, the site renders neither the Google tag nor the analytics-consent interface. Consent is remembered in local storage for 12 months. Rejecting consent prevents the tag from loading; withdrawing prior consent removes available `_ga*` cookies and reloads the page without the tag.

## GA4 administration

Configure the web stream and property as follows:

- Enable Enhanced Measurement and keep page views based on browser-history events, scrolls, outbound clicks, and video engagement enabled.
- Set event-data retention to 14 months.
- Disable Google Signals and advertising personalization. This site keeps `ad_storage`, `ad_user_data`, and `ad_personalization` denied.
- Enable email data redaction and redact any campaign query parameters that could receive personal information.
- Define and activate an internal-traffic filter for maintainers.
- Mark `signup_handoff` as a key event. Its name intentionally describes a click into the app, not a completed registration.

Register these event-scoped custom dimensions:

| Dimension | Event parameter |
| --- | --- |
| Content language | `content_language` |
| Page ID | `page_id` |
| Page type | `page_type` |
| Interaction ID | `interaction_id` |
| Placement | `placement` |
| Target ID | `target_id` |
| Web Vital name | `metric_name` |

Register `progress_percent` and `metric_value` as event-scoped custom metrics. `CLS` is multiplied by 1,000 before it is sent so GA4 receives an integer; the remaining Web Vitals use milliseconds.

## Event taxonomy

| Event | Meaning |
| --- | --- |
| `signup_handoff` | Visitor clicked a marketing CTA leading to app signup. |
| `login_handoff` | Visitor clicked a link leading to app login. |
| `app_open_handoff` | Visitor clicked a general link into the app. |
| `navigation_click` | Visitor used tracked header, footer, feature, or in-page navigation. |
| `language_switch` | Visitor selected the equivalent page in the other language. |
| `related_content_click` | Visitor selected a related guide or discovery page. |
| `faq_open` | Visitor opened a tracked FAQ answer. |
| `social_click` | Visitor selected a social profile. |
| `contact_click` | Visitor selected the support email action. |
| `not_found_recovery` | Visitor used a recovery action on the 404 page. |
| `content_progress` | Visitor reached 25%, 50%, or 75% of a page. Enhanced Measurement owns the 90% `scroll` event. |
| `web_vital` | A TTFB, FCP, LCP, CLS, or INP field measurement. |

Do not add names, email addresses, account IDs, prayer content, visible free-form text, arbitrary URLs, or other personal information to event parameters.

## Search Console

1. Create and DNS-verify the URL-prefix property `https://www.doitforjesus.com/`.
2. In GA4, open **Admin → Product links → Search Console Links** and link that property to the production web stream.
3. Publish the Search Console collection from the GA4 Reports Library.

Use **Google Organic Search Queries** for query impressions, clicks, CTR, and average position. Use **Google Organic Search Traffic** to join landing-page search performance with GA engagement and key-event behavior.

## Campaign naming and review cadence

Campaign links should use lowercase `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` values separated with underscores. Never put personal information in UTM values. Example:

```text
https://www.doitforjesus.com/catholic-prayer-app?utm_source=youtube&utm_medium=social&utm_campaign=advent_prayer&utm_content=video_description
```

Use the first 28 complete days as the baseline. Compare each rolling 28-day period with the preceding period, and add year-over-year comparisons once enough history exists:

- Visibility: impressions, clicks, CTR, and average position.
- Traffic: users and sessions by landing page, source/medium, device, country, and language route.
- Engagement: engagement rate, average engagement time, content progress, FAQs, video activity, and navigation.
- Outcomes: signup and app-open handoffs and their rate per landing page.
- Experience: Core Web Vitals by page, with emphasis on p75 LCP, INP, and CLS.

## Release verification

- Before consent, confirm there is no request to `googletagmanager.com` or `google-analytics.com`.
- After acceptance, confirm one `page_view` per initial load and client navigation and validate custom events in DebugView.
- Reject consent in a fresh browser and confirm no analytics network requests occur.
- Withdraw previously granted consent, confirm `_ga*` cookies are removed, and confirm the reloaded page does not load the tag.
- Check English, Spanish, a discovery landing page, and an unknown 404 path. Confirm all parameters use stable IDs and contain no personal information.
- Allow for Google processing time before evaluating Search Console reports.
