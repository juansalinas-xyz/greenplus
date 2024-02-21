interface Props {
  title: string;
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
  title,
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
      <label htmlFor={id} className="text-white">{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className="mt-1 h-10 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <p className="mt-1 text-sm text-red-500">{touched && formError}</p>
    </div>
  );
}

export default FormInputs;
