// PHASE-1 DAY-2
export function Button({ label, onclick, variant }){
    return <button className={variant} onClick={onclick}>{label}</button>;
}