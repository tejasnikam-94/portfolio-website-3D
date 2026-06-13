
export default function Section({title,text}){
  return (
  <section style={{padding:'80px 10%',borderTop:'1px solid #222'}}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>)
}
