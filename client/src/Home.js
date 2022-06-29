import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

function Home() {
  const userInfo = useContext(UserContext);
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos", { withCredentials: true })
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  if (!userInfo.email) {
    return (
      <div>
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
                        Authentication Error
                      </h3>
                      <p class="font-medium text-sm text-yellow-600">
                        You need to Login or Sign up with your Email Address and
                        Password.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Personal To Do Web Application
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  This is Personal To do Web Application with Personal Security
                  and Authentication. Just Login with Your Email and Start
                  Working with this.
                </p>
              </div>
              <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Acess From Anywhere
                  </h6>
                  <p className="text-sm text-gray-900">
                    You can acress your to do list from any device with just
                    your email and password.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Secure Authenticatiopn
                  </h6>
                  <p className="text-sm text-gray-900">
                    Your List will Secure with Authenticatiopn and only
                    acessable with your login details.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function addTodo(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:4000/todos",
        { text: inputVal },
        { withCredentials: true }
      )
      .then((response) => {
        setTodos([...todos, response.data]);
        setInputVal("");
      });
  }

  function updateTodo(todo) {
    const data = { id: todo._id, done: !todo.done };
    axios
      .post("http://localhost:4000/todos", data, { withCredentials: true })
      .then(() => {
        const newTodos = todos.map((t) => {
          if (t._id === todo._id) {
            t.done = !t.done;
          }
          return t;
        });
        setTodos([...newTodos]);
      });
  }

  return (
    <div className=" ">
      <form onSubmit={(e) => addTodo(e)} className="min-w-[50vw] ml-[40%] mt-10">
        <input
          placeholder={"What do you want to do?"}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          class="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
        />
      </form>
      <ul>
        
        {todos.map((todo) => (
          <li className="ml-[40%]">
            
            <div  class="text-xl text-orange-800 max-w-[270px]  mt-2 placeholder-orange-400 rounded-l-full py-2 px-5 bg-orange-100  outline-orange-300"
             >
            <input
            class="mr-3"
            type={"checkbox"}
              checked={todo.done}
              onClick={() => updateTodo(todo)}
               />  

            {todo.done ? <del>{todo.text }</del> : todo.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
