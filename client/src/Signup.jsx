import { useState } from "react";

function Signup () {

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded 0">
                        Register
                    </button>
                    <p>Already have an account?</p>
                    <button type="submit" className="btn btn-default border w-100  bg-light rounded 0 text-decoration-none">
                        Login
                    </button>
                </form>
        </div>
    </div>
  );
}

export default Signup;
