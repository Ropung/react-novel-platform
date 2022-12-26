// FIXME Move this file to ../usual-open-hours/widgets/ : 브룻 님이 Temp 쪽 작업하시고 나면.
import { CommonLabelProps } from "@/utils/common-props";
import { FunctionComponent, ReactEventHandler } from "react";

export interface CheckableBoxProps extends CommonLabelProps {
  id?: string;
  key?: any;
  className?: string;
  children?: React.ReactNode;

  checked: boolean;
  onChange: ReactEventHandler;
}

const CheckableBox: FunctionComponent<CheckableBoxProps> = (props) => {
  const {
    id,
    className,
    children,
    checked,
    disabled,
    onChange,
    ...outerDivRestProps
  } = props;

  const baseStyleClasses =
    "relative min-w-[10vw] checked-bg:bg-main checked-bg:text-main-contra border border-gray-400 rounded-lg overflow-hidden font-bold";

  return (
    <label
      {...outerDivRestProps}
      className={`${baseStyleClasses} ${className ?? ""}`}
    >
      <input
        type="checkbox"
        className="hidden peer"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-full h-full transition flex items-center justify-center bg-gray-200 text-gray-500 p-2 ${
          checked ? "peer-disabled:bg-gray-500" : "peer-disabled:bg-gray-200"
        }`}
      >
        {children ?? ""}
      </div>
    </label>
  );
};

export default CheckableBox;
