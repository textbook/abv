import { ChangeEventHandler, FC } from "react";

type NumericInputProps = {
	label: string;
	name: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	value: number;
}

const NumericInput: FC<NumericInputProps> = ({ label, name, onChange, value }) => (
	<label>
		{label}
		<input
			inputMode="decimal"
			name={name}
			onChange={onChange}
			type="number"
			value={value}
		/>
	</label>
);

export default NumericInput;
