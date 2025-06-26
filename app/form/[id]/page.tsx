"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { fieldBlocksDataType } from "@/lib/data";
import PreviewCard from "@/components/common/previewCard";
import Field from "@/components/builder/field";

const initialForm = { fields: [] };

function FormPage() {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const stored = localStorage.getItem("form");
    const form = stored ? JSON.parse(stored) : initialForm;

    setForm(form);
  }, []);

  return (
    <div className="w-4xl mx-auto">
      <PreviewCard>
        <>
          {form?.fields.map((field: fieldBlocksDataType) => {
            return (
              <div
                key={field.id}
                className="relative my-4 flex flex-col gap-2 rounded"
              >
                <label htmlFor={field.id}>{field.name || "|"}</label>
                <Field field={field} />
              </div>
            );
          })}

          <Button
            className="cursor-pointer"
            onClick={() => alert("This is a prototype. The form won't submit.")}
          >
            Submit
          </Button>
        </>
      </PreviewCard>
    </div>
  );
}

export default FormPage;
