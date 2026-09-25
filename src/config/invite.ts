// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY when cloning this template for a client.
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Simran Kaur",
  groom: "Amardeep Singh",
  /** Shown big in the hero */
  dateLabel: "12–13.12.26",
  /** Local start / end of the main function (ISO, no timezone) */
  start: "2026-12-12T10:00:00",
  end: "2026-12-13T22:00:00",
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "Saturday–Sunday, 12th–13th December 2026",
  timeLine: "Festivities from 10:00 AM onwards",
  eventTitle: "Wedding of Amardeep & Simran",
  invitationNote:
    "With the blessings of Waheguru Ji and our families, we invite you to celebrate the wedding of Amardeep & Simran — two days of love, laughter, Anand Karaj and togetherness.",
  venue: {
    name: "5 Flowers Ananta Elite",
    address: "5 Flowers Ananta Elite, Kota — tap Get Directions for the map & full address",
    /** Used for the Google Maps deep link */
    query: "5 Flowers Ananta Elite Kota",
    lat: 25.1611028,
    lng: 75.8694047,
  },
  closing: "With love & blessings — see you there",
  /** Production URL of this invite (no trailing slash) — used for og:url and og:image */
  siteUrl: "https://amardeeep-weds-simran.invitingyou.top",
  /** Share image file in `public/` — save the wedding card graphic as `public/og.jpg` (ideal size 1200×630) */
  ogImage: "/og.jpg",
} as const;

export const mapsUrl = "https://maps.app.goo.gl/iXg98TjPpPrxrViF6";

export const directionsUrl = "https://maps.app.goo.gl/iXg98TjPpPrxrViF6";

export const siteUrl = invite.siteUrl;

export const ogImageUrl = `${invite.siteUrl}${invite.ogImage}`;
