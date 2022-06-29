import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { Redirect } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const user = useContext(UserContext);

  function loginUser(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
        setLoginError(false);
        setRedirect(true);
      })
      .catch(() => {
        setLoginError(true);
      });
  }

  if (redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <form action="" onSubmit={(e) => loginUser(e)}>
      {loginError && (
        <section class="bg-coolGray-50 py-4">
          <div class="container px-4 mx-auto">
            <div class="p-6 bg-yellow-100 border border-yellow-200 rounded-md">
              <div class="flex flex-wrap justify-between -m-2">
                <div class="flex-1 p-2">
                  <div class="flex flex-wrap -m-1">
                    <div class="w-auto p-1">
                      <svg
                        class="relative top-0.5"
                        width="16"
                        height="16"
                        viewbox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10.6667C7.86814 10.6667 7.73925 10.7058 7.62962 10.779C7.51999 10.8523 7.43454 10.9564 7.38408 11.0782C7.33362 11.2 7.32042 11.3341 7.34614 11.4634C7.37187 11.5927 7.43536 11.7115 7.52859 11.8047C7.62183 11.898 7.74062 11.9615 7.86994 11.9872C7.99926 12.0129 8.1333 11.9997 8.25512 11.9493C8.37694 11.8988 8.48106 11.8133 8.55431 11.7037C8.62757 11.5941 8.66667 11.4652 8.66667 11.3333C8.66667 11.1565 8.59643 10.987 8.4714 10.8619C8.34638 10.7369 8.17681 10.6667 8 10.6667ZM15.1133 11.6467L9.74667 2.31334C9.5732 2.00235 9.31986 1.74331 9.01279 1.56298C8.70573 1.38266 8.35609 1.28758 8 1.28758C7.6439 1.28758 7.29426 1.38266 6.9872 1.56298C6.68014 1.74331 6.42679 2.00235 6.25333 2.31334L0.919999 11.6467C0.740529 11.9493 0.644094 12.294 0.640428 12.6459C0.636763 12.9977 0.725997 13.3444 0.899123 13.6507C1.07225 13.9571 1.32314 14.2123 1.62645 14.3907C1.92977 14.5691 2.27479 14.6643 2.62667 14.6667H13.3733C13.728 14.6702 14.0773 14.5793 14.3853 14.4033C14.6933 14.2273 14.9489 13.9726 15.126 13.6652C15.3031 13.3579 15.3952 13.0089 15.393 12.6542C15.3908 12.2995 15.2943 11.9518 15.1133 11.6467ZM13.96 12.98C13.9016 13.084 13.8163 13.1704 13.7131 13.2302C13.6099 13.29 13.4926 13.321 13.3733 13.32H2.62667C2.50741 13.321 2.39006 13.29 2.28688 13.2302C2.18369 13.1704 2.09843 13.084 2.04 12.98C1.98149 12.8787 1.95068 12.7637 1.95068 12.6467C1.95068 12.5296 1.98149 12.4147 2.04 12.3133L7.37333 2.98C7.42928 2.8708 7.51427 2.77916 7.61896 2.71516C7.72365 2.65117 7.84397 2.61731 7.96667 2.61731C8.08936 2.61731 8.20968 2.65117 8.31437 2.71516C8.41906 2.77916 8.50405 2.8708 8.56 2.98L13.9267 12.3133C13.9928 12.4132 14.0308 12.5291 14.0367 12.6488C14.0425 12.7684 14.0161 12.8875 13.96 12.9933V12.98ZM8 5.33334C7.82319 5.33334 7.65362 5.40357 7.52859 5.5286C7.40357 5.65362 7.33333 5.82319 7.33333 6V8.66667C7.33333 8.84348 7.40357 9.01305 7.52859 9.13807C7.65362 9.2631 7.82319 9.33334 8 9.33334C8.17681 9.33334 8.34638 9.2631 8.4714 9.13807C8.59643 9.01305 8.66667 8.84348 8.66667 8.66667V6C8.66667 5.82319 8.59643 5.65362 8.4714 5.5286C8.34638 5.40357 8.17681 5.33334 8 5.33334Z"
                          fill="#F59E0B"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1 p-1">
                      <h3 class="mb-2 font-medium text-sm text-yellow-900">
                        LOGIN ERROR!{" "}
                      </h3>
                      <p class="font-medium text-sm text-yellow-600">
                        WRONG EMAIL OR PASSWORD!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-auto p-2">
                  <a href="#">
                    <svg
                      width="16"
                      height="16"
                      viewbox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.94001 8L13.14 3.80667C13.2655 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2655 2.98554 13.14 2.86C13.0145 2.73447 12.8442 2.66394 12.6667 2.66394C12.4891 2.66394 12.3189 2.73447 12.1933 2.86L8.00001 7.06L3.80668 2.86C3.68114 2.73447 3.51088 2.66394 3.33334 2.66394C3.15581 2.66394 2.98555 2.73447 2.86001 2.86C2.73447 2.98554 2.66395 3.1558 2.66395 3.33333C2.66395 3.51087 2.73447 3.68113 2.86001 3.80667L7.06001 8L2.86001 12.1933C2.79752 12.2553 2.74793 12.329 2.71408 12.4103C2.68024 12.4915 2.66281 12.5787 2.66281 12.6667C2.66281 12.7547 2.68024 12.8418 2.71408 12.9231C2.74793 13.0043 2.79752 13.078 2.86001 13.14C2.92199 13.2025 2.99572 13.2521 3.07696 13.2859C3.1582 13.3198 3.24534 13.3372 3.33334 13.3372C3.42135 13.3372 3.50849 13.3198 3.58973 13.2859C3.67097 13.2521 3.7447 13.2025 3.80668 13.14L8.00001 8.94L12.1933 13.14C12.2553 13.2025 12.3291 13.2521 12.4103 13.2859C12.4915 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8418 13.3198 12.9231 13.2859C13.0043 13.2521 13.078 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.2859 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.2859 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.94001 8Z"
                        fill="#784D05"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div> */}
          <div class="lg:w-2/6 md:w-1/2 ml-auto  bg-gray-100 rounded-lg p-8 flex flex-col mr-[33%] md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Login Form
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="full-name"
                name="full-name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="email"
                name="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>

          </div>
        </div>
      </section>
    </form>
  );
}

export default Login;
