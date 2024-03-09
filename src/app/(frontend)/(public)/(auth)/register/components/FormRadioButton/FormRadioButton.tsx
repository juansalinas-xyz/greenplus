interface Props {
    title: string;
    id: string;
    name: string;
    value: string;
    className: string;
    checked?: boolean;
    handleInputChange: (event: any) => void;
}

function FormRadioButton({
    title,
    id,
    name,
    value,
    className,
    checked,
    handleInputChange,
  }: Props) {
  return (
    <div className="flex-1">
      <input type="radio" className="hidden peer" id={id} name={name} value={value} onChange={handleInputChange} checked={checked} />
       <label htmlFor={id} className={className}>
        <span className="text-xs text-slate-950">{title}</span>
      </label>
    </div>
  )
}

export default FormRadioButton