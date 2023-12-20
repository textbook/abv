import { ChangeEventHandler, FC } from "react";

interface NumericInputProps {
	label: string;
	name: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	value: string;
}

const NumericInput: FC<NumericInputProps> = ({ label, name, onChange, value }) => (
	<label>
		{label}
		<input
			name={name}
			onChange={onChange}
			type="text"
			value={value}
		/>
	</label>
);

export default NumericInput;
