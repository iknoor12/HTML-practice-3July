export function Button({ label, onclick, variant }){
    return <button className={variant} onClick={onclick}>{label}</button>;
}