import React from "react";

import { fieldBlocksData } from "@/lib/data";
import { formType } from "./builder";

function FieldBlocks({
  form,
  setForm,
}: {
  form: formType;
  setForm: React.Dispatch<React.SetStateAction<formType>>;
}) {
  return (
    <aside className="w-xl bg-slate-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Field Blocks</h2>
      <div className="w-full flex flex-wrap gap-2">
        {fieldBlocksData.map((field) => {
          return (
            <div
              key={field.id}
              className="bg-white rounded w-18 h-18 flex border items-center justify-center cursor-pointer hover:shadow-md"
              onClick={() =>
                setForm({ ...form, fields: [...form.fields, field] })
              }
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                {field.icon}
                <small className="text-xs">{field.name}</small>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default FieldBlocks;
