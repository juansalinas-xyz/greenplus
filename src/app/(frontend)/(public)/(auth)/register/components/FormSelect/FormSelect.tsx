interface Props {
  title: string;
  id: string;
  name: string;
  handleInputChange: (event: any) => void;
  handleBlur: (event: any) => void;
  document: string;
  touched: boolean;
  formError: string;
  options: FormOption[];
}

interface FormOption {
  name: string;
  value: string;
}

function FormSelect({
  title,
  id,
  name,
  document,
  handleInputChange,
  handleBlur,
  touched,
  formError,
  options,
}: Props) {
  const optionDefault = options[0];
  const optionsValue = options.slice(1);

  return (
    <div className="mb-3">
      <select
        name={name}
        id={id}
        value={document}
        className="mt-1 h-10 cursor-pointer rounded-md border border-white bg-transparent p-2 text-white focus:outline-none"
        onChange={handleInputChange}
        onBlur={handleBlur}
      >
        <option
          key={optionDefault.value}
          value={optionDefault.value}
          className="text-black"
          hidden
        >
          {optionDefault.name}
        </option>

        {optionsValue.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.name}
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm text-red-500">{touched && formError}</p>
    </div>
  );
}

export default FormSelect;
