import React, { useState } from "react";
import { LoginPage } from "./LoginPage";
import { TicketPanel } from "./TicketPanel";

export const AdminPanel = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const renderLoginPage = () => {
    return <LoginPage onLogin={handleLogin} />;
  };

  const renderAdminPanel = () => {
    return <TicketPanel />;
  };

  return loggedIn ? renderAdminPanel() : renderLoginPage();
};
