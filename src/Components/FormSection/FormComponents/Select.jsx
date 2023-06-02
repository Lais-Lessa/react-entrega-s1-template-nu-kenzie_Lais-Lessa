function Select({ id, options, label, ...rest }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...rest}>
        {options.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
