import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteFont } from '@/theme/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Page Not Found | DoIt4Jesus',
  description: 'This page does not exist or may have moved.',
};

function LostSheepIllustration() {
  return (
    <svg
      className="not-found-illustration"
      viewBox="0 0 560 520"
      role="img"
      aria-labelledby="lost-sheep-title lost-sheep-description"
    >
      <title id="lost-sheep-title">A sheep that wandered away from the flock</title>
      <desc id="lost-sheep-description">A small sheep stands on a hill beneath a trail of Rosary beads and stars.</desc>

      <circle cx="280" cy="258" r="194" fill="#f8f4ec" opacity=".98" />
      <path d="M110 369c66-46 131-53 190-21 52 28 103 31 154 8v96H110v-83Z" fill="#b8c8bd" />
      <path d="M110 399c66-32 128-32 187-1 53 27 105 29 157 5v49H110v-53Z" fill="#78988b" />

      <g className="not-found-stars" fill="#d9ad76">
        <path d="m170 150 4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9Z" />
        <path d="m405 188 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
        <circle cx="384" cy="132" r="4" />
        <circle cx="199" cy="217" r="3" />
      </g>

      <path
        d="M157 119c41-35 91-46 138-29 51 18 74 64 55 103-16 34-59 48-86 26-23-18-18-53 7-64 24-11 52 7 52 33"
        fill="none"
        stroke="#d9ad76"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 17"
      />
      <circle cx="324" cy="191" r="8" fill="#d9ad76" />
      <path d="M324 201v32m-13-15h26" stroke="#d9ad76" strokeWidth="5" strokeLinecap="round" />

      <g className="not-found-sheep" transform="translate(250 315)">
        <ellipse cx="31" cy="49" rx="57" ry="39" fill="#fff" />
        <circle cx="-6" cy="38" r="26" fill="#fff" />
        <circle cx="12" cy="25" r="26" fill="#fff" />
        <circle cx="42" cy="24" r="28" fill="#fff" />
        <circle cx="68" cy="39" r="26" fill="#fff" />
        <path d="M69 37c19-9 38 4 37 24-1 20-17 31-36 24-16-6-18-38-1-48Z" fill="#263e49" />
        <path d="M84 38c9-12 18-12 22-5 4 8-6 16-18 16" fill="#263e49" />
        <circle cx="91" cy="58" r="3.5" fill="#f8f4ec" />
        <path d="M-3 76v34m54-31v31m35-27v27" stroke="#263e49" strokeWidth="8" strokeLinecap="round" />
      </g>

      <path d="M96 452h368" stroke="#173e5b" strokeWidth="3" strokeLinecap="round" opacity=".2" />
    </svg>
  );
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={siteFont.variable}>
      <body className="not-found-body">
        <header className="not-found-header">
          <Link href="/" className="brand" aria-label="DoIt4Jesus home">
            <Image className="brand-logo" src="/assets/logo-white.svg" alt="" width={132} height={70} priority />
          </Link>
          <span>404 · Lost, not forgotten</span>
        </header>

        <main className="not-found-main">
          <section className="not-found-copy" aria-labelledby="not-found-heading">
            <p className="not-found-kicker">Well, this is awkward.</p>
            <h1 id="not-found-heading">This URL has gone astray.</h1>
            <p className="not-found-message">
              We checked the whole flock. This page isn’t here—either the address is wrong or the page has moved.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="not-found-primary">Take me home</Link>
              <a href="https://app.doit4jesus.com/" className="not-found-secondary">Open the prayer app</a>
            </div>
            <p className="not-found-note">No sheep were lost in the making of this error.</p>
          </section>

          <div className="not-found-art" aria-hidden="false">
            <span className="not-found-number" aria-hidden="true">404</span>
            <LostSheepIllustration />
          </div>
        </main>
      </body>
    </html>
  );
}
