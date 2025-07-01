
export default function InputText(props) {
  const{
    type = "text",
    id,
    label,
    placeholder,
    register
  } = props
  return (
    <div className="flex flex-col-reverse gap">
      <input
        className="text-gray-300 border px-2 py-1 rounded text-sm md:px-4 md:py-2"
        placeholder={placeholder||""}
        type={type || "text"}
        {...register}
      />
      <label htmlFor={id} className="text-neutral-600 text-sm">{label||""}</label>
    </div>
  )
}