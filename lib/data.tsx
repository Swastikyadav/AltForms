type inputType = "text" | "tel" | "number" | "email" | "url" | "dropdown";

export interface fieldBlocksDataType {
  id: string;
  tag: "input" | "select";
  type: inputType;
  name: string;
  placeholder: string;
  // icon?: React.ReactElement;
  icon?: string;
  options?: { id: string; value: string }[];
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
  {
    id: "006",
    tag: "select",
    type: "dropdown",
    name: "Select",
    placeholder: "Select from dropdown",
    icon: "ChevronDownIcon",
    options: [
      { id: "option-0", value: "option 01" },
      { id: "option-1", value: "option 02" },
    ],
  },
];
