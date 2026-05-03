import type { SVGProps } from "react";

/* Authentic brand-mark SVGs. Sized via width/height props. */

export function GoogleWorkspaceMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={28} height={28} {...props}>
      <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-8 19.6-20 0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.1C29.3 35.2 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.1C40.9 35.4 44 30.1 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

export function SlackMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 122.8 122.8" width={26} height={26} {...props}>
      <path fill="#E01E5A" d="M25.8 77.6a12.9 12.9 0 1 1-12.9-12.9h12.9zm6.5 0a12.9 12.9 0 1 1 25.8 0v32.3a12.9 12.9 0 1 1-25.8 0z" />
      <path fill="#36C5F0" d="M45.2 25.8a12.9 12.9 0 1 1 12.9-12.9v12.9zm0 6.5a12.9 12.9 0 1 1 0 25.8H12.9a12.9 12.9 0 1 1 0-25.8z" />
      <path fill="#2EB67D" d="M97 45.2a12.9 12.9 0 1 1 12.9 12.9H97zm-6.5 0a12.9 12.9 0 1 1-25.8 0V12.9a12.9 12.9 0 1 1 25.8 0z" />
      <path fill="#ECB22E" d="M77.6 97a12.9 12.9 0 1 1-12.9 12.9V97zm0-6.5a12.9 12.9 0 1 1 0-25.8h32.3a12.9 12.9 0 1 1 0 25.8z" />
    </svg>
  );
}

export function ClickUpMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} {...props}>
      <defs>
        <linearGradient id="cu1" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#8930FD" />
          <stop offset="1" stopColor="#49CCF9" />
        </linearGradient>
        <linearGradient id="cu2" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#FF02F0" />
          <stop offset="1" stopColor="#FFC800" />
        </linearGradient>
      </defs>
      <path fill="url(#cu1)" d="M6 73.4l15.3-11.7c8.1 10.6 16.7 15.5 26.3 15.5 9.5 0 17.9-4.8 25.6-15.4L88.7 73c-11.2 15.4-25 23.5-41.1 23.5C31.5 96.5 17.5 88.4 6 73.4z" />
      <path fill="url(#cu2)" d="M47.5 25.6L20.3 49l12.6 14.7L47.5 51l14.7 12.7L74.7 49 47.5 25.6z" />
    </svg>
  );
}

export function NotionMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width={26} height={26} {...props}>
      <rect width="64" height="64" rx="10" fill="#fff" />
      <path fill="#000" d="M14 13.5l3.6-2.7c1-.8 1.5-.9 3.4-.7l28 1.7c.6.1.5.9-.2 1l-1.4.3c-1.2.3-1.4.7-1.4 1.9v32c0 1.6-.6 2.5-2.2 2.6l-22.6 1.4c-1.5.1-2.2-.2-3.1-1.4L11.4 44c-1-1.4-1.4-2.4-1.4-3.6V16.4c0-1.4.6-2.5 2-3.4 0 .1 1.3.2 2 .5z" />
      <path fill="#fff" d="M42.5 16.6L20.4 18c-1 .1-1.4.4-1.4 1.3v23.1c0 1 .4 1.3 1.4 1.3l22.1-1.3c.9-.1 1.2-.6 1.2-1.4V18c0-.9-.3-1.3-1.2-1.4z" />
      <path fill="#000" d="M40.4 22.4c.2.9 0 1.8-1 1.9l-1 .2v15c-.9.5-1.7.8-2.4.8-1.1 0-1.4-.4-2.2-1.4l-6.7-10.5v10.2l2.1.5s0 1.2-1.7 1.2l-4.7.3c-.1-.3 0-1 .5-1.1l1.2-.3V25.6l-1.7-.1c-.2-.9.3-2.2 1.7-2.3l5-.3 6.9 10.5V24l-1.7-.2c-.2-1.1.6-1.9 1.6-2l3.1-.3z" />
    </svg>
  );
}
