import React from "react";
import { Button } from "@/components/ui/button";
import { TextCursorInput } from "lucide-react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between p-6 border-b-2">
      <div className="flex items-center gap-2">
        <TextCursorInput className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold">AltForms</h1>
      </div>
      <Button className="cursor-pointer">Publish</Button>
    </div>
  );
}

export default Header;
