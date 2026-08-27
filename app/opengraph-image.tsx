import { ImageResponse } from "next/og";

export const alt = "BioBalans – holistické centrum vo Vranove nad Topľou";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",background:"#f5f1e8",color:"#17362d",padding:"72px",fontFamily:"Arial"}}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",border:"2px solid #9ab68a",padding:"54px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"18px"}}>
          <div style={{width:"70px",height:"70px",borderRadius:"50%",background:"#17362d",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"34px"}}>B</div>
          <div style={{display:"flex",flexDirection:"column"}}><b style={{fontSize:"34px",letterSpacing:"5px"}}>BIO BALANS</b><span style={{fontSize:"16px",letterSpacing:"4px",color:"#6a9d45"}}>HOLISTICKÉ CENTRUM</span></div>
        </div>
        <div style={{display:"flex",flexDirection:"column",maxWidth:"900px"}}>
          <span style={{fontSize:"20px",letterSpacing:"4px",textTransform:"uppercase",color:"#6a9d45",marginBottom:"20px"}}>Vranov nad Topľou</span>
          <div style={{fontFamily:"Georgia",fontSize:"76px",lineHeight:1.05}}>Rovnováha začína porozumením sebe.</div>
        </div>
        <div style={{display:"flex",fontSize:"23px",gap:"32px"}}><span>Výživové poradenstvo</span><span>InBody</span><span>One Brain</span></div>
      </div>
    </div>, size
  );
}
