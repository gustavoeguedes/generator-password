"use client";
import { useState } from "react";
import { FaCheckDouble, FaRegCopy } from "react-icons/fa";

interface PasswordContainerPros {
  password: string;
}

export function PasswordContainer({ password }: PasswordContainerPros) {
  const [copied, setCopied] = useState(false);
  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };
  return (
    <div className="w-full h-12 bg-slate-600 flex items-center justify-between rounded-lg">
      <p className="ml-2">{password ? `Senha: ${password}` : "Gere uma senha"}</p>
      <button className="border-l-[1px] h-full p-2" onClick={copyPassword}>
        {copied ? (
          <FaCheckDouble fill="#86efac" size={24} />
        ) : (
          <FaRegCopy fill="#fff" size={24} />
        )}
      </button>
    </div>
  );
}
