import {
  HashIcon,
  LetterTextIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

type inputType = "text" | "tel" | "number" | "email" | "url";

interface fieldBlocksDataTypes {
  id: string;
  tag: "input";
  type: inputType;
  name: string;
  placeholder: string;
  icon: React.ReactElement;
}

export const fieldBlocksData: fieldBlocksDataTypes[] = [
  {
    id: "001",
    tag: "input",
    type: "text",
    name: "Name",
    placeholder: "Enter your full name",
    icon: <LetterTextIcon className="w-6 h-6" />,
  },
  {
    id: "002",
    tag: "input",
    type: "tel",
    name: "Phone",
    placeholder: "Enter you phone number",
    icon: <PhoneIcon className="w-6 h-6" />,
  },
  {
    id: "003",
    tag: "input",
    type: "number",
    name: "Number",
    placeholder: "Enter a number",
    icon: <HashIcon className="w-6 h-6" />,
  },
  {
    id: "004",
    tag: "input",
    type: "email",
    name: "Email",
    placeholder: "Enter your email address",
    icon: <MailIcon className="w-6 h-6" />,
  },
  {
    id: "005",
    tag: "input",
    type: "url",
    name: "URL",
    placeholder: "https://",
    icon: <LinkIcon className="w-6 h-6" />,
  },
];
