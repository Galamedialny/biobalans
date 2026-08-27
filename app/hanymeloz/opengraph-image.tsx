import { ImageResponse } from "next/og";

export const alt = "HanyMel OZ – pomáhame Hanke kráčať vpred";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",background:"#fff0f3",color:"#4b2936",padding:"72px",fontFamily:"Arial"}}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",border:"2px solid #d95f7f",padding:"54px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"18px"}}><div style={{width:"70px",height:"70px",borderRadius:"50%",background:"#d95f7f",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px"}}>♥</div><b style={{fontSize:"40px",letterSpacing:"2px"}}>HanyMel OZ</b></div>
        <div style={{display:"flex",flexDirection:"column",maxWidth:"900px"}}>
          <span style={{fontSize:"20px",letterSpacing:"4px",textTransform:"uppercase",color:"#b34466",marginBottom:"20px"}}>Hankin príbeh</span>
          <div style={{fontFamily:"Georgia",fontSize:"78px",lineHeight:1.05}}>Pomáhame Hanke kráčať vpred.</div>
        </div>
        <div style={{fontSize:"24px"}}>Aj malá pomoc môže byť veľkým krokom k lepšiemu životu.</div>
      </div>
    </div>, size
  );
}
