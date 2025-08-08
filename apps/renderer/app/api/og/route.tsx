import { SITE_URL } from "@/app/config";
import { ImageResponse } from "next/og";
export async function GET(req: Request) {
  const size = {
    width: 1200,
    height: 630,
  };
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const img = searchParams.get("img");

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
              top: img && img.length > 0 ? "8%" : "85%",
              right: img && img.length > 0 ? "50%" : "5%",

              transform:
                img && img.length > 0 ? "translateX(50%)" : "translateX(0%)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {img !== null && img.length > 0 && (
              <img
                src={img}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "1000px",
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
      }
    );
  }
}
