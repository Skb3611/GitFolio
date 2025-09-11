import { SITE_URL } from "@/app/config";
import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET(req: Request) {
  const size = {
    width: 1200,
    height: 630,
  };

  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const img = searchParams.get("img");
    const decodedimg = img ? decodeURIComponent(img) : null;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          {/* Background OG image */}
          <img
            src={`${SITE_URL}/assets/og.png`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // ✅ ensures scaling looks crisp
            }}
          />

          {/* Overlay content */}
          <div
            style={{
              position: "absolute",
              top: decodedimg && decodedimg.length > 0 ? "15%" : "85%",
              right: decodedimg && decodedimg.length > 0 ? "50%" : "5%",
              transform:
                decodedimg && decodedimg.length > 0
                  ? "translateX(50%)"
                  : "translateX(0%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {decodedimg && decodedimg.length > 0 && (
              <img
                src={decodedimg}
                alt="avatar"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  objectFit: "cover", // ✅ keep image sharp
                }}
              />
            )}
            {name && name.length > 0 && (
              <span
                style={{
                  color: "white",
                  fontSize: "35px",
                  fontWeight: "bold",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.6)", // ✅ better text contrast
                }}
              >
                {name}'s Portfolio
              </span>
            )}
          </div>
        </div>
      ),
      {
        ...size,
        headers: {
          "Content-Type": "image/jpeg", // ✅ switch to JPEG for better quality
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  } catch (e) {
    console.error(e);
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <img
            src={`${SITE_URL}/assets/og.png`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
      {
        ...size,
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  }
}
