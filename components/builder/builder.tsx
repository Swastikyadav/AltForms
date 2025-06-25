"use client";

import React, { useState } from "react";

import { fieldBlocksDataType } from "@/lib/data";

import FieldBlocks from "./fieldBlocks";
import FieldSettings from "./fieldSettings";
import FormPreview from "./formPreview";

export interface formType {
  id: number;
  name: string;
  template: string;
  fields: fieldBlocksDataType[];
}

function FormBuilder({
  form,
  setForm,
}: {
  form: formType;
  setForm: React.Dispatch<React.SetStateAction<formType>>;
}) {
  const [editingField, setEditingField] = useState("");

  return (
    <section className="w-full min-h-screen flex justify-between">
      <FieldBlocks form={form} setForm={setForm} />
      <FormPreview
        form={form}
        setForm={setForm}
        editingField={editingField}
        setEditingField={setEditingField}
      />
      <FieldSettings
        form={form}
        setForm={setForm}
        editingField={editingField}
      />
    </section>
  );
}

export default FormBuilder;
