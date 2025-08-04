import { SITE_URL, USER_IMAGE_ENDPOINT } from '@/app/config'
import { ImageResponse } from 'next/og'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
const res = await fetch(`${USER_IMAGE_ENDPOINT}/${username}`)
const result = await res.json()
if(!result || result.status === false){
    return new ImageResponse(
        <img src={`${SITE_URL}/assets/banner-card.png`} alt="" />
    )
}
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position:"relative"
        }}
      >
        <img src={`${SITE_URL}/assets/banner-card.png`} alt={alt} style={{ width: '100%', height: '100%' }} />
        <div style={
            {
                position:"absolute",
                top:"8%",
                right:"50%",
                transform:"translateX(50%)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                gap:"10px"
            }
        }>
        <img src={result.data.profileImg} alt="" style={{ width: '80px', height: '80px', borderRadius:"1000px" }} />
        <span style={{
            color:"white",
            fontSize:"35px",
            fontWeight:"bold"
        }}>{result.data.name}'s Portfolio</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}