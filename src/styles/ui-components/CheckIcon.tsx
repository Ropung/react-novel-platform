import InitProps, { CommonLabelProps } from "@/utils/common-props";
import { FunctionComponent } from "react";
import { FaCheck } from "react-icons/fa";

export interface CheckIconProps extends Omit<CommonLabelProps, "onChange"> {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckIcon: FunctionComponent<CheckIconProps> = (props) => {
  const { checked, onChange, content, className, ...restProps } = props;
  const baseStyleClasses =
    "flex gap-4 items-center text-gray-400 checked-bg:text-black";

  return (
    <label {...restProps} className={`${baseStyleClasses} ${className}`}>
      <input
        className="hidden peer"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <FaCheck className="peer-checked:text-main peer-checked:drop-shadow-2xl duration-150 peer-checked:scale-[1.5]" />
      <span className="peer-checked:text-dark peer-checked:drop-shadow-2xl">
        {content}
      </span>
    </label>
  );
};

export default CheckIcon;
