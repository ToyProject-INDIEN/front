import React, { useState, useLayoutEffect } from "react";
import { CustomInputContainer, WarningText } from "../../styles/commonStyles";

const CustomInput = ({
  value,
  placeholder,
  type,
  onChange,
  variant,
  error,
  warningText,
}) => {
  const [option, setOption] = useState("");
  const [focus, setFocus] = useState(false);

  useLayoutEffect(() => {
    setOption(type);
  }, [type]);

  const onVisible = () => {
    setOption(option === "password" ? "text" : "password");
  };

  const optionRender = (_type) => {
    let result = null;

    if (_type === "password") {
      result = (
        <button onClick={onVisible}>
          <i
            className={`icon password ${option === "password" ? "on" : "off"}`}
          />
        </button>
      );
    }

    return result;
  };

  return (
    <>
      <CustomInputContainer variant={variant} focus={focus}>
        <input
          value={value}
          type={option}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={onChange ? false : true}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <div className="option">{optionRender(type)}</div>
      </CustomInputContainer>
      <WarningText error={error} show={warningText}>
        {warningText}
      </WarningText>
    </>
  );
};

export default React.memo(CustomInput);
