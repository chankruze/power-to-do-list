/*
Author: chankruze (chankruze@gmail.com)
Created: Tue May 24 2022 20:30:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { MdCancel, MdDelete, MdEdit, MdSave } from "react-icons/md";

interface TodoItemProps {
  onClick: () => void;
  action: string;
}

const colors: {
  [key: string]: string;
} = {
  delete: "text-red-500 bg-red-50",
  edit: "text-blue-500 bg-blue-50",
  save: "text-green-500 bg-green-50",
  cancel: "text-gray-500 bg-gray-50",
};

const ActionButton: React.FC<TodoItemProps> = ({ onClick, action }) => {
  return (
    <div
      className={`flex items-center gap-1 border ${colors[action]}
      py-1 px-2 uppercase rounded cursor-pointer hover:bg-opacity-80`}
      onClick={onClick}
    >
      <p className="text-xs font-medium">{action}</p>
      {action === "delete" && <MdDelete size={18} />}
      {action === "edit" && <MdEdit size={18} />}
      {action === "save" && <MdSave size={18} />}
      {action === "cancel" && <MdCancel size={18} />}
    </div>
  );
};

export default ActionButton;
