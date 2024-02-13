import "../styles/header.scss";
import { useEffect } from "react";
import { Disclosure } from "@headlessui/react";

import { useMutation, useQuery } from "@apollo/client";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useStoreContext } from "../utils/store";
import { UPDATE_USER } from "../utils/actions";
import { QUERY_AUTHENTICATE } from "../utils/queries";
import { LOGOUT } from "../utils/mutations";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate();
  const [logoutUser] = useMutation(LOGOUT, {
    refetchQueries: [QUERY_AUTHENTICATE],
  });

  const logout = async (e) => {
    e.preventDefault();
    try {
      await logoutUser();
      dispatch({
        type: UPDATE_USER,
        user: null,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800">
            <h1 className="text-2xl font-bold">King Pinto</h1>
            <nav className="flex gap-4">
             
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {state.user ? (
                  <>
                    <p className="welcome mr-3">
                      Welcome, {state.user.firstName}
                    </p>

                    {state.user.orders.length > 0 ? (
                      <NavLink
                        to="/order-history"
                        className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Order History
                      </NavLink>
                    ) : (
                      ""
                    )}
                    <NavLink
                      to="/logout"
                      onClick={logout}
                      className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Log Out
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Register
                    </NavLink>
                  </>
                )}
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {state.user ? (
                      <>
                        <NavLink
                          to="/logout"
                          onClick={logout}
                          className="mt-10 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-small"
                        >
                          Log Out
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to="/login"
                          className="mt-10 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-small"
                        >
                          Sign In
                        </NavLink>
                        <NavLink
                          to="/register"
                          className="mt-10 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-small"
                        >
                          Register
                        </NavLink>
                      </>
                    )}
                  </div>
                </Disclosure.Panel>
              </div>
            </nav>
          </header>
        </>
      )}
    </Disclosure>
  );
}
