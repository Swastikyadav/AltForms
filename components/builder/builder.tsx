import React from "react";
import FieldBlocks from "./fieldBlocks";
import FieldSettings from "./fieldSettings";
import FormPreview from "./formPreview";

function FormBuilder() {
  return (
    <section className="w-full min-h-screen flex justify-between">
      <FieldBlocks />
      <FormPreview />
      <FieldSettings />
    </section>
  );
}

export default FormBuilder;
