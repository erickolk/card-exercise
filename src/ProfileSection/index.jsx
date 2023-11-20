
export default function ProfileSection({children , text, props}){
  return (
    <p 
      className="p-3" 
      {...props}>
      
      {children}
      {text}
    
    </p>
  )
}