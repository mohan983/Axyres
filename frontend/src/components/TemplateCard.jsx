export default function TemplateCard({ image, name, onClick }) {
  return (
    <div className="template-card" onClick={onClick}>
      <img src={image} className="template-img" />
      <h3>{name}</h3>
    </div>
  )
}
