import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0a0e",
          borderRadius: 6,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <rect
            x="2"
            y="2"
            width="24"
            height="24"
            rx="5"
            stroke="#7c5cff"
            strokeWidth="2"
          />
          <path
            d="M8 8l6 6-6 6M15 20h5"
            stroke="#7c5cff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
