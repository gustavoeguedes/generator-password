interface PropsInputCheckbox {
    name: string;
    value: boolean;
    setValue: (value:boolean) => void
}

export function InputCheckbox({name, value, setValue}:PropsInputCheckbox) {
    return(
        <label className="flex items-center justify-between w-3/4 mx-auto">
            <span>{name}</span>
            <input type="checkbox"
            className="hidden peer"
            onChange={()=>setValue(!value)}
            checked={value}
            />
            <span className="inline-block w-12 h-6 rounded-full bg-gray-50 peer-checked:bg-gray-100 relative after:bg-green-300 after:inline-block after:content-[''] after:h-6 after:w-6 after:rounded-full after:absolute after:left-0 peer-checked:after:left-6 after:transition-all after:duration-500"></span>
        </label>
    )
}