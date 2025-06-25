import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PreviewCard from "@/components/common/previewCard";
import { formType } from "./builder";
import { Trash2Icon } from "lucide-react";
import { fieldBlocksDataType } from "@/lib/data";
import { cn } from "@/lib/utils";

function FormPreview({
  form,
  setForm,
  editingField,
  setEditingField,
}: {
  form: formType;
  setForm: React.Dispatch<React.SetStateAction<formType>>;
  editingField: string;
  setEditingField: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleRemoveField = (field: fieldBlocksDataType) => {
    if (field.id === editingField) setEditingField("");
    const updatedFields = form.fields.filter((item) => item.id !== field.id);

    setForm({ ...form, fields: updatedFields });
  };

  if (!form.fields.length) {
    return (
      <main className="border border-l-2 border-r-2 w-full px-12 lg:px-24 py-6 bg-slate-50">
        <h2 className="text-xl font-semibold mb-4">Form Name</h2>
        <div className="bg-white h-screen border-2 rounded-lg p-6 flex justify-center text-2xl text-slate-600">
          Nothing to show here. Choose a field from Field Blocks.
        </div>
      </main>
    );
  }

  return (
    <PreviewCard>
      <>
        {form.fields.map((field) => {
          return (
            <div
              key={field.id}
              className={cn(
                editingField === field.id && "bg-slate-100",
                "relative my-4 flex flex-col gap-2 p-2 rounded hover:bg-slate-100"
              )}
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
                onClick={() => setEditingField(field.id)}
              ></div>
              <Trash2Icon
                className="absolute right-2 w-5 h-5 z-50 cursor-pointer hover:text-red-500"
                onClick={() => handleRemoveField(field)}
              />
              <label htmlFor={field.id}>{field.name || "|"}</label>
              <Input
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />
            </div>
          );
        })}

        <Button>Submit</Button>
      </>
    </PreviewCard>
  );
}

export default FormPreview;
