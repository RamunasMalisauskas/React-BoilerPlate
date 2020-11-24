import React from "react";
import * as S from "./Input.styled";
import PropType from "prop-types";

function Input({
  type,
  placeholder,
  value,
  radio,
  checkbox,
  options,
  handleChange,
}) {
  switch (type) {
    case "textarea":
      return (
        <S.TextArea
          type="textarea"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "email":
      return (
        <S.Email
          type="email"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "number":
      return (
        <S.Input
          type="number"
          step="0.1"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "dropdown":
      return (
        <S.Select type="dropdown" onChange={handleChange}>
          <option value="">Select your city:</option>

          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.name}
            </option>
          ))}
        </S.Select>
      );
    case "radio":
      return (
        <S.RadioInput>
          {radio.map((r, i) => (
            <div key={i}>
              <S.Radio
                type="radio"
                name="radio"
                value={r.value}
                onClick={handleChange}
              />
              <S.Label>{r.label}</S.Label>
            </div>
          ))}
        </S.RadioInput>
      );

    case "checkbox":
      return (
        <S.RadioInput>
          {checkbox.map((c, i) => (
            <div key={i}>
              <S.Radio
                type="checkbox"
                name="checkbox"
                value={c.value}
                onClick={handleChange}
              />
              <S.Label>{c.label}</S.Label>
            </div>
          ))}
        </S.RadioInput>
      );
    default:
      return (
        <S.Input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

Input.propTypes = {
  type: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
  radio: PropType.array,
  checkbox: PropType.array,
  options: PropType.array,
  handleChange: PropType.func,
};

export default Input;