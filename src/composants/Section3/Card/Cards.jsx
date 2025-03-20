import './Cards.css'

const Cards = ({ title , image , paragraphe }) => {
  return (
    <div style = {{ width:'18rem' , margin:'1rem', border:"solid " ,height: "23rem",  borderRadius: "1cm" }}>
       <div style={{position:"relative ", height:"1px"}}> < img  src={image} alt="" style={{ height:"23rem", width:"100%" , borderRadius: "1cm"}}/>
         <h6>{title}</h6> <br/>
        
        <p style={{
                position: "absolute",
                top: "8cm",
                textAlign: "start",
                left: "0.5cm",
                color:"white",
                fontWeight: "800"
        }}
        >{paragraphe}</p>
        
       
       </div>
      
    </div>
  );
};



export default Cards;