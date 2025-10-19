"use client";

import { createContext, useState, useEffect } from "react";
import { authUserData, jwtToken, logOut, refreshToken } from "../lib/auth";
import { SessionProvider } from "next-auth/react";

export const AuthContext = createContext({
  user: null,
  token: null,
  loading: true,
  refresh: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthData = async () => {
      setLoading(true);
      const userData = await authUserData();
      const accessToken = await jwtToken();
      setUser(userData);
      setToken(accessToken);
      setLoading(false);
    };
    loadAuthData();
  }, []);

  const refresh = async () => {
    await refreshToken();
    const userData = await authUserData();
    const accessToken = await jwtToken();
    setUser(userData);
    setToken(accessToken);
  };

  const logout = async (route = "/") => {
    await logOut(route);
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, refresh, logout }}>
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
};
