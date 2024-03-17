import '../../styles/components/RadioButton.scss'

interface RadioButtonProps {
    id: string;
    name: string;
    className: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export function RadioButton({id, name, checked, className, onChange}: RadioButtonProps) {

    return(
        <div className={className}>
            <input
                type="radio"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}></label>
        </div>
    )
}