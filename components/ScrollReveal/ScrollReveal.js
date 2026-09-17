export default function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
}) {
  return <Tag className={className}>{children}</Tag>;
}
