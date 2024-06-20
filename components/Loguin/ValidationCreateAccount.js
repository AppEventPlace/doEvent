import { useState, useCallback, useEffect } from "react";

const useValidation = (initialState) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const passwordValidation = {
    regex:
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?:{}|<>+\-¬])[A-Za-z0-9!@#$%^&*(),.?:{}|<>+\-¬]{8,}$/,
    message:
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial",
  };

  const validations = {
    celular: {
      regex: /^[0-9]*$/,
      message: "El número de celular debe ser numérico",
    },
    correo: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Ingrese un correo electrónico válido",
    },
    contrasena: passwordValidation,
    confirmarContrasena: passwordValidation,
    default: {
      regex: /^[a-zA-ZñÑ\s]*$/,
      message: "Este campo solo puede contener letras",
    },
  };

  const validarCampos = useCallback(() => {
    let newErrors = {};

    for (let key in state) {
      const { regex, message } = validations[key] || validations.default;
      if (key === "correo") {
        if (state[key] && !regex.test(state[key])) {
          newErrors[key] = message;
        }
      } else if (key === "contrasena" || key === "confirmarContrasena") {
        if (state[key] && !regex.test(state[key])) {
          newErrors[key] = message;
        }
      } else {
        if (!regex.test(state[key])) {
          newErrors[key] = message;
        }
      }
    }

    if (
      state.confirmarContrasena &&
      state.contrasena !== state.confirmarContrasena
    ) {
      newErrors.confirmarContrasena =
        "La contraseña y la confirmación de la contraseña deben ser iguales";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  }, [state]);

  useEffect(() => {
    validarCampos();
  }, [state, validarCampos]);

  return {
    state,
    setState,
    errors,
    setErrors,
    validarCampos,
  };
};

export default useValidation;
