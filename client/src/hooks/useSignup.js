import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import swal from "sweetalert";
import { baseUrl } from "../config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (user) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
      swal({
        icon: "success",
        text: "Successfully Signed Up",
        timer: 2000,
    });
    }
  };

  return { signup, isLoading, error };
};
