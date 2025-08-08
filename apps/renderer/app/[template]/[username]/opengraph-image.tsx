import { SITE_URL, USER_IMAGE_ENDPOINT } from "@/app/config";
import { ImageResponse } from "next/og";

export const alt = "Gitfolio Open Graph";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  try {
    const res = await fetch(`${USER_IMAGE_ENDPOINT}/${username}`);
    const result = await res.json();
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={`${SITE_URL}/assets/banner-card.png`}
            alt={alt}
            style={{ width: "100%", height: "100%" }}
          />
          {result.status === true && (
            <div
              style={{
                position: "absolute",
                top:
                  result.data.profileImg && result.data.profileImg.length > 0
                    ? "8%"
                    : "85%",
                right:
                  result.data.profileImg && result.data.profileImg.length > 0
                    ? "50%"
                    : "5%",

                transform:
                  result.data.profileImg && result.data.profileImg.length > 0
                    ? "translateX(50%)"
                    : "translateX(0%)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {result.data.profileImg !== null &&
                result.data.profileImg.length > 0 && (
                  <img
                    src={result.data.profileImg}
                    alt=""
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "1000px",
                    }}
                  />
                )}
              {result.data.name !== null && result.data.name.length > 0 && (
                <span
                  style={{
                    color: "white",
                    fontSize: "35px",
                    fontWeight: "bold",
                  }}
                >
                  {result.data.name}'s Portfolio
                </span>
              )}
            </div>
          )}
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    console.log("cannot generate image");
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`${SITE_URL}/assets/banner-card.png`}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      )
    );
  }
}
