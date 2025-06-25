"use client";

import React, { useState } from "react";

import { fieldBlocksDataType } from "@/lib/data";

import FieldBlocks from "./fieldBlocks";
import FieldSettings from "./fieldSettings";
import FormPreview from "./formPreview";

export interface formType {
  name: string;
  template: string;
  fields: fieldBlocksDataType[];
}

function FormBuilder() {
  const [form, setForm] = useState<formType>({
    name: "",
    template: "",
    fields: [],
  });

  return (
    <section className="w-full min-h-screen flex justify-between">
      <FieldBlocks form={form} setForm={setForm} />
      <FormPreview form={form} setForm={setForm} />
      <FieldSettings />
    </section>
  );
}

export default FormBuilder;
