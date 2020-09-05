import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { StyledInput } from "./styles";

export default function Input({ name, label, required, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      <span style={{ marginRight: "auto" }}>
        {label &&
          <label htmlFor={fieldName}>
            {label} {
              required &&
              <span style={{ color: "red", fontWeight: "bolder" }}>*</span> 
              }
          </label>}
      </span>

      <StyledInput
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
}
