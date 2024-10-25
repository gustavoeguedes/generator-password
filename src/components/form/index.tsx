"use client";
import { FormEvent, useState } from "react";
import { InputCheckbox } from "../inputCheckbox";
import { PasswordContainer } from "../passwordContainer";
import { ErrorAlert } from "../errorAlert";

export default function Form() {
  const [numbers, setNumbers] = useState(true);
  const [letters, setLetters] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const [specialCharacteres, setSpecialCharcteres] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    opitionsPassword();
  };

  const opitionsPassword = () => {
    const lettersInString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersInString = "0123456789";
    const specialCharacteresInString = "!@#$%^&*()-_=+[]{}|;:,.<>?/~";
    let opitionsOfCharacteres = "";
    if (!numbers && !letters && !specialCharacteres) {
        setPassword('')
        setError(true)
        return
    }
    setError(false)
    if (numbers && letters && specialCharacteres) {
      opitionsOfCharacteres =
        lettersInString + specialCharacteresInString + numbersInString;
      generatePassword(opitionsOfCharacteres);
    } else if (numbers && letters) {
      opitionsOfCharacteres = lettersInString + numbersInString;
      generatePassword(opitionsOfCharacteres);
    } else if (numbers && specialCharacteres) {
        opitionsOfCharacteres = numbersInString + specialCharacteresInString
        generatePassword(opitionsOfCharacteres)
    } else if (letters && specialCharacteres) {
        opitionsOfCharacteres = lettersInString + specialCharacteresInString
        generatePassword(opitionsOfCharacteres)
    } else if(numbers) {
        generatePassword(numbersInString)
    } else if(letters) {
        generatePassword(lettersInString)
    } else if(specialCharacteres) {
        generatePassword(specialCharacteresInString)
    }
  };    

  const generatePassword = (opitionsOfCharacteres: string) => {
    let newPassword = "";
    const lengthPassword = 14;
    for (let i = 0; i <= lengthPassword; i++) {
      let indexCharacterRandom = Math.floor(
        Math.random() * opitionsOfCharacteres.length
      );

      newPassword += opitionsOfCharacteres[indexCharacterRandom];
    }
    setPassword(newPassword);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <legend className="text-xl text-center font-semibold tracking-wide">
          Gerador de senhas
        </legend>
        <InputCheckbox name="Números" value={numbers} setValue={setNumbers} />
        <InputCheckbox name="Letras" value={letters} setValue={setLetters} />
        <InputCheckbox
          name="Caracteres especiais"
          value={specialCharacteres}
          setValue={setSpecialCharcteres}
        />
        <input type="submit" value="Gerar Senha" className="bg-gray-950 w-full p-4 rounded-lg cursor-pointer"/>
      </form>
      <PasswordContainer password={password}/>
      <ErrorAlert error={error}/>
    </>
  );
}
