import './form-input.styles.scss';

interface Props{
    label: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    type: string
    required: boolean
}

const FormInput = ({ label, ...otherProps }: Props) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;