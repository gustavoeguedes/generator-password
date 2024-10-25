interface ErrorAlertProps {
    error: boolean;
}

export function ErrorAlert({error}:ErrorAlertProps) {
    return(
        <div className={`bg-red-600 font-semibold p-2 rounded-lg ${error ? 'block' : 'hidden'}`}>
            <span>Selecione ao menos uma opção!</span>
        </div>
    )
}