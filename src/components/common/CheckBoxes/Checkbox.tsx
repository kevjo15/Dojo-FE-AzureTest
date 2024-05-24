import React from "react";

interface CheckBoxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label htmlFor={name} className="text-neutral-800 dark:text-neutral-200">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
