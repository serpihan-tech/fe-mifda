export default function CustomDatePicker ({ value, onChange, placeholder, required }) {
  return (
    <input
      type="date"
      value={value ? value.toISOString().split("T")[0] : ""}
      onChange={(e) => onChange(new Date(e.target.value))}
      placeholder={placeholder}
      required={required}
      className="w-full border border-netral-20 rounded-md py-2 px-4 text-sm font-normal focus:outline-pri-main"
    />
  );
};