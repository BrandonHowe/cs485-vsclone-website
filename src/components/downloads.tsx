"use client";

import { useSyncExternalStore } from "react";

export const DOWNLOAD_URL_MAC =
  "https://github.com/BrandonHowe/cs485-llm-ide/releases/latest/download/VSCode-darwin-arm64-latest.zip";
export const DOWNLOAD_URL_WINDOWS =
  "https://github.com/BrandonHowe/cs485-llm-ide/releases/latest/download/VSCodeUserSetup-x64-latest.exe";

export type DetectedOS = "mac" | "windows" | "other";

// UA doesn't change while the page is open, so the store has no listeners to
// wire up. Returning a noop unsubscribe keeps useSyncExternalStore happy.
const subscribe = () => () => {};

function getClientSnapshot(): DetectedOS {
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad|iPod/.test(ua)) {
    return "mac";
  }
  if (/Win/.test(ua)) {
    return "windows";
  }
  return "other";
}

function getServerSnapshot(): DetectedOS {
  return "other";
}

export function useDetectedOS(): DetectedOS {
  // useSyncExternalStore lets SSR render with the "other" fallback while the
  // client hydrates with the detected OS, without tripping the "setState in
  // effect" lint rule and without the flicker of a two-phase effect.
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

interface PrimaryDownloadButtonProps {
  className: string;
}

const ARROW_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M8 2v9M4 8l4 4 4-4M3 14h10" />
  </svg>
);

/**
 * Renders the primary OS-aware download button. Label + href adapt to the
 * detected OS; unknown platforms fall back to macOS so the button always has
 * a usable destination.
 */
export function PrimaryDownloadButton({ className }: PrimaryDownloadButtonProps) {
  const os = useDetectedOS();
  const isWindows = os === "windows";
  return (
    <a
      href={isWindows ? DOWNLOAD_URL_WINDOWS : DOWNLOAD_URL_MAC}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {ARROW_ICON}
      {isWindows ? "Download for Windows" : "Download for macOS"}
    </a>
  );
}

/**
 * Small "Also available for <other OS>" link rendered under a PrimaryDownloadButton
 * so visitors on the non-detected platform still have a one-click path.
 */
export function AlternatePlatformLink({ className }: { className: string }) {
  const os = useDetectedOS();
  const isWindows = os === "windows";
  return (
    <a
      href={isWindows ? DOWNLOAD_URL_MAC : DOWNLOAD_URL_WINDOWS}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {isWindows
        ? "Also available for macOS"
        : "Also available for Windows"}
    </a>
  );
}
