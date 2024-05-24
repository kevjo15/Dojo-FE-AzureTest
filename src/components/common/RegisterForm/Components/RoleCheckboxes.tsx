import React from "react";

interface RoleCheckboxesProps {
  role: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoleCheckboxes: React.FC<RoleCheckboxesProps> = ({
  role,
  handleChange,
}) => {
  return (
    <div className="flex items-center mb-4">
      <label className="text-neutral-800 dark:text-neutral-200 mr-4">
        Role:
      </label>
      <input
        type="radio"
        name="role"
        value="Student"
        id="roleStudent"
        className="mr-2"
        checked={role === "Student"}
        onChange={handleChange}
      />
      <label
        htmlFor="roleStudent"
        className="text-neutral-800 dark:text-neutral-200 mr-4"
      >
        Student
      </label>
      <input
        type="radio"
        name="role"
        value="Teacher"
        id="roleTeacher"
        className="mr-2"
        checked={role === "Teacher"}
        onChange={handleChange}
      />
      <label
        htmlFor="roleTeacher"
        className="text-neutral-800 dark:text-neutral-200"
      >
        Teacher
      </label>
    </div>
  );
};

export default RoleCheckboxes;
