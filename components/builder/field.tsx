import React from "react";
import { Input } from "@/components/ui/input";
import { fieldBlocksDataType } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Field({ field }: { field: fieldBlocksDataType }) {
  return (
    <div>
      {field.tag === "input" && (
        <Input
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
        />
      )}

      {field.tag === "select" && (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={field.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((option) => (
              <SelectItem key={option.id} value={option.value}>
                {option.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}

export default Field;
