import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { UserContext } from "../../UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const { user, setUser } = useContext(UserContext);

    function register(event) {
        event.preventDefault();
        const body = {
            email,
            password,
        };

        fetch("http://localhost:3004/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response.accessToken);
                localStorage.setItem("access_token", JSON.stringify(response));
                setUser(response);
            });
    }

    useEffect(() => {
        function validatePassword(password) {
            const specialCharacters = ["*", "#", "!", "@"];

            if (password <= 8) {
                setPasswordError("Password must be at least 8 characters.");
                return;
            }

            let hasSpecialCharacters = false;

            for (let character of password) {
                const hasCharacter = specialCharacters.includes(character);

                if (hasCharacter) {
                    hasSpecialCharacters = true;
                }
            }

            if (!hasSpecialCharacters) {
                setPasswordError(
                    "Your password must have at least one character.",
                    specialCharacters
                );
            } else {
                setPasswordError(null);
            }
        }

        validatePassword(password);
    }, [password]);

    return (
        <form onSubmit={register}>
            <fieldset class="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </fieldset>
            <fieldset class="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </fieldset>

            {passwordError && <p>{passwordError}</p>}

            <button type="submit" className="btn btn-primary">
                Log in
            </button>
        </form>
    );
}