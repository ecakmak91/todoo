interface InputProps{
  name:string;
  type:string;
  placeholder?:string;
  value?:string;
}

function Input({
  name, 
  type, 
  placeholder, 
  value
}:InputProps) {
  return (
    <input className="w-full p-2 border border-gray-200 "
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input