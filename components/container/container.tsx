"use client";

import React, { useState } from "react";
import Header from "@/components/header/header";
import FormBuilder, { formType } from "@/components/builder/builder";
import { toast } from "sonner";
import { CheckCircleIcon } from "lucide-react";
import { initialFormState } from "@/lib/data";

function Container() {
  const storedForm = localStorage.getItem("form");
  const formState = storedForm ? JSON.parse(storedForm) : initialFormState;
  const [form, setForm] = useState<formType>(formState);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div>
      <Header
        onPublish={() => {
          setTimeout(() => {
            localStorage.setItem("form", JSON.stringify(form));
            setIsSaved(true);
            toast("Form Saved Successfully!", {
              icon: <CheckCircleIcon className="text-green-800" />,
            });
          }, 2000);
        }}
        form={form}
        isSaved={isSaved}
      />
      <FormBuilder form={form} setForm={setForm} />
    </div>
  );
}

export default Container;
