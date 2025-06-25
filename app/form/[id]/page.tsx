"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fieldBlocksDataType } from "@/lib/data";

function FormPage() {
  const stored = localStorage.getItem("form");
  const form = stored ? JSON.parse(stored) : null;

  return (
    <main className="border border-l-2 border-r-2 w-4xl m-auto px-12 lg:px-24 py-6 bg-slate-50">
      <h2 className="text-xl font-semibold mb-4">Form Name</h2>
      <div className="bg-white min-h-screen border-2 rounded-lg p-6">
        {form?.fields.map((field: fieldBlocksDataType) => {
          return (
            <div
              key={field.id}
              className="relative my-4 flex flex-col gap-2 rounded"
            >
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

        <Button
          className="cursor-pointer"
          onClick={() => alert("This is a prototype. The form won't submit.")}
        >
          Submit
        </Button>
      </div>
    </main>
  );
}

export default FormPage;
