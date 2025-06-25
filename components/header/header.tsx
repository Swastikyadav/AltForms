import React from "react";
import { SaveIcon, TextCursorInput } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formType } from "../builder/builder";
import Link from "next/link";

function Header({
  onPublish,
  form,
  isSaved,
}: {
  onPublish: () => void;
  form: formType;
  isSaved: boolean;
}) {
  const { id, fields } = form;

  return (
    <div className="w-full flex items-center justify-between p-6 border-b-2">
      <div className="flex items-center gap-2">
        <TextCursorInput className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold">AltForms</h1>
      </div>

      <div className="flex gap-2 items-center">
        <Button className="cursor-pointer" onClick={onPublish}>
          <SaveIcon className="w-6 h-6" />
          Save
        </Button>
        {fields.length && isSaved ? (
          <Link href={`/form/${id}`}>
            <Button variant="outline" className="cursor-pointer">
              View Form
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
