export default function Checkbox({ label, id }) {
  return (
    <label className="inline-flex items-center mt-4 mr-4">
      <input type="checkbox" className="h-5 w-5 value={id}" />
      <span className="ml-2">{label}</span>
    </label>
  );
}
