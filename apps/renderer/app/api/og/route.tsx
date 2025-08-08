import { SITE_URL } from "@/app/config";
import { ImageResponse } from "next/og";
export const dynamic = "force-dynamic"; // Changed from "edge"
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
          <img
            src={`${SITE_URL}/assets/banner-card.png`}
            alt={""}
            style={{ width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: decodedimg && decodedimg.length > 0 ? "8%" : "85%",
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
            {decodedimg !== null && decodedimg.length > 0 && (
              <img
                src={decodedimg}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                }}
              />
            )}
            {name !== null && name.length > 0 && (
              <span
                style={{
                  color: "white",
                  fontSize: "35px",
                  fontWeight: "bold",
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
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  } catch (e) {
    console.log(e);
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
            src={`${SITE_URL}/assets/banner-card.png`}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ),
      {
        ...size,
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    );
  }
}
