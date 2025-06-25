import React from "react";
import { Input } from "@/components/ui/input";
import { formType } from "./builder";

function FieldSettings({
  form,
  setForm,
  editingField,
}: {
  form: formType;
  setForm: React.Dispatch<React.SetStateAction<formType>>;
  editingField: string;
}) {
  const editingFieldData = form.fields.find(
    (field) => field.id === editingField
  );

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const tepmEditingFieldData = {
      ...editingFieldData!,
      [key]: e.target.value,
    };
    const tempFormFields = form.fields.map((field) => {
      if (field.id === editingField) return tepmEditingFieldData;
      return field;
    });

    setForm({ ...form, fields: tempFormFields });
  };

  if (!editingField) return "";

  return (
    <aside className="w-xl bg-slate-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Field Settings</h2>
      <div className="my-4 flex flex-col gap-2 rounded">
        <label htmlFor="name">Name</label>
        <Input
          placeholder="Change name..."
          value={editingFieldData?.name}
          onChange={(e) => {
            handleFieldChange(e, "name");
          }}
        />
      </div>
      <div className="my-4 flex flex-col gap-2 rounded">
        <label htmlFor="name">Placeholder</label>
        <Input
          placeholder="Change placeholder..."
          value={editingFieldData?.placeholder}
          onChange={(e) => {
            handleFieldChange(e, "placeholder");
          }}
        />
      </div>
    </aside>
  );
}

export default FieldSettings;
