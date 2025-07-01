
export default function InputCheckbox(props) {
  return (
    <div className="flex flex-col-reverse gap">
      <input
        className="text-gray-300 border px-2 py-1 rounded text-sm md:px-4 md:py-2"
        placeholder="olivia@example.com"
        type="email"
        {...register("email")}
      />
      <label htmlFor="email" className="text-neutral-600 text-sm">Email</label>
    </div>
  )
}