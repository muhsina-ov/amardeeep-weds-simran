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
    name: "Hotel G20 Inn",
    address: "Hotel G20 Inn — tap Get Directions for the map & full address",
    /** Used for the Google Maps deep link */
    query: "Hotel G20 Inn",
    lat: 0,
    lng: 0,
  },
  closing: "With love & blessings — see you there",
  /** Production URL of this invite (no trailing slash) — used for og:url and og:image */
  siteUrl: "https://amardeeep-weds-simran.invitingyou.top",
  /** Share image file in `public/` — save the wedding card graphic as `public/og.jpg` (ideal size 1200×630) */
  ogImage: "/og.jpg",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.venue.query,
)}`;

export const directionsUrl = "https://share.google/vg0UrcXAn4PbNgulR";

export const siteUrl = invite.siteUrl;

export const ogImageUrl = `${invite.siteUrl}${invite.ogImage}`;
