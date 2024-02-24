import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const TicketPanel = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(`${process.env.SERVER_ENDPOINT}/tickets`);
        setTickets(res.data);
      } catch (error) {
        console.log("An error occured loading tickets", error);
      }
    };

    loadData();
  }, []);

  const handleClick = async (ticketId) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.log("Token not found");
        return;
      }
      await axios.delete(`${process.env.SERVER_ENDPOINT}/tickets/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Ticket successfully deleted");
    } catch (error) {
      console.log("Error occured deleting the ticket.", error);
    }
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(updatedTickets);
  };

  const renderTicket = (ticket) => (
    <Box
      sx={{
        margin: 15,
        border: "1px solid black",
        borderRadius: "15px",
        textAlign: "center",
      }}
      onClick={() => handleClick(ticket.id)}
    >
      <Typography>id: {ticket.id}</Typography>
      <Typography>name: {ticket.firstName}</Typography>
      <Typography>email: {ticket.email}</Typography>
      <Typography>message: {ticket.message}</Typography>
    </Box>
  );

  return (
    <Box>
      {tickets.map((ticket) => {
        return renderTicket(ticket);
      })}
    </Box>
  );
};
