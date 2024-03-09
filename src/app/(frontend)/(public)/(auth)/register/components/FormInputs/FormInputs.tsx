interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string,
  value: string;
  handleInputChange: (event: any) => void;
  handleBlur: (event: any) => void;
  touched: boolean;
  formError: string;
}

function FormInputs({
  id,
  name,
  placeholder,
  type,
  value,
  handleInputChange,
  handleBlur,
  touched,
  formError,
}: Props) {
  return (
    <div className="mb-3">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className="text-xs mt-1 h-9 w-full rounded-md bg-transparent p-2 text-slate-950 border border-slate-400 focus:border-2 focus:border-green-800 focus:placeholder-transparent focus:outline-none"
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <p className="mt-1 text-xs text-red-500">{touched && formError}</p>
    </div>
  );
}

export default FormInputs;
