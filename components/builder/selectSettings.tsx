"use client";

import { fieldBlocksDataType } from "@/lib/data";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formType } from "./builder";
import { randomSixDigitNumber } from "@/lib/utils";

function SelectSettings({
  editingField,
  editingFieldData,
  form,
  setForm,
}: {
  editingField: string;
  editingFieldData: fieldBlocksDataType | undefined;
  form: formType;
  setForm: React.Dispatch<React.SetStateAction<formType>>;
}) {
  const [options, setOptions] = useState(editingFieldData?.options || []);

  useEffect(() => {
    onFieldChange({
      ...form,
      fields: form.fields.map((field) => {
        if (field.id === editingField) {
          return { ...field, options };
        }

        return field;
      }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onFieldChange = (form: formType) => setForm(form);

  const handleAddOption = () => {
    setOptions([
      ...options,
      { id: `${randomSixDigitNumber()}`, value: "New Option" },
    ]);
  };

  const handleOptionChange = (value: string, id: string) => {
    const updatedOptions = options.map((option) => {
      if (option.id === id) return { ...option, value: value || " " };
      return option;
    });

    setOptions(updatedOptions);
  };

  const handleRemoveOption = (id: string) => {
    const filteredOptions = options.filter((option) => option.id !== id);
    setOptions(filteredOptions);
  };

  return (
    <div className="my-4 flex flex-col gap-2 rounded">
      <label htmlFor="name">Add Options</label>
      {options?.map((option) => {
        return (
          <span key={option.id} className="flex items-center gap-2">
            <Input
              placeholder="Change option..."
              value={option.value}
              onChange={(e) => {
                handleOptionChange(e.target.value, option.id);
              }}
            />
            <Trash2Icon
              className="w-6 h-6 cursor-pointer hover:text-red-600"
              onClick={() => {
                handleRemoveOption(option.id);
              }}
            />
          </span>
        );
      })}

      <Button onClick={handleAddOption} className="cursor-pointer">
        <PlusIcon /> Add Option
      </Button>
    </div>
  );
}

export default SelectSettings;
