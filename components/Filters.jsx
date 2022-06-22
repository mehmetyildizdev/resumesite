import Checkbox from "./Checkbox";

export default function Filters({ categories }) {
  return (
    <div className="flex items-center mt-4">
      {categories.map((category) => (
        <Checkbox
          key={category.id}
          label={category.category_name}
          id={category.id}
        />
      ))}
    </div>
  );
}
