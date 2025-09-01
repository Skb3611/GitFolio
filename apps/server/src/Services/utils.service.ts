export const getUserLocation =async(ip:string) => {
  try{
    const geo = await fetch(`https://ipapi.co/${ip}/country/`)
    console.log(geo);
    const data = await geo.json()
    console.log(data);
    return data
  }catch(e){
    console.log(e);
    return null
  }
}
