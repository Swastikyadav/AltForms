type inputType = "text" | "tel" | "number" | "email" | "url";

export interface fieldBlocksDataType {
  id: string;
  tag: "input";
  type: inputType;
  name: string;
  placeholder: string;
  // icon?: React.ReactElement;
  icon?: string;
}

export const fieldBlocksData: fieldBlocksDataType[] = [
  {
    id: "001",
    tag: "input",
    type: "text",
    name: "Name",
    placeholder: "Enter your full name",
    icon: "LetterTextIcon",
  },
  {
    id: "002",
    tag: "input",
    type: "tel",
    name: "Phone",
    placeholder: "Enter you phone number",
    icon: "PhoneIcon",
  },
  {
    id: "003",
    tag: "input",
    type: "number",
    name: "Number",
    placeholder: "Enter a number",
    icon: "HashIcon",
  },
  {
    id: "004",
    tag: "input",
    type: "email",
    name: "Email",
    placeholder: "Enter your email address",
    icon: "MailIcon",
  },
  {
    id: "005",
    tag: "input",
    type: "url",
    name: "URL",
    placeholder: "https://",
    icon: "LinkIcon",
  },
];
