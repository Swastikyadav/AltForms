"use client";

import React, { useState } from "react";
import Header from "@/components/header/header";
import FormBuilder, { formType } from "@/components/builder/builder";
import { toast } from "sonner";
import { CheckCircleIcon } from "lucide-react";

function Container() {
  const [form, setForm] = useState<formType>({
    id: 3261,
    name: "",
    template: "",
    fields: [],
  });
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
