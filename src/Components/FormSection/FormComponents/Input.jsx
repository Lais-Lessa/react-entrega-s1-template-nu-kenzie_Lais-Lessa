function Input({ label, type, id, ...rest }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} {...rest} />
    </>
  );
}

export default Input;
