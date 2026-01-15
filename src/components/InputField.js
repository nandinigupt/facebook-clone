export default function InputField({
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="w-full mb-3">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-md text-sm focus:outline-none 
        ${error ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
