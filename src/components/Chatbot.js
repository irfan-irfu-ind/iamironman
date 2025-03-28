import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async () => {
        if (!query.trim()) return;

        const newMessage = { text: query, sender: "user" };
        setMessages(prev => [...prev, newMessage]);
        setQuery("");

        try {
            const response = await axios.post("http://localhost:4000/api/chat", { query });
            const { reply, invoices } = response.data;

            setMessages(prev => [
                ...prev, 
                { 
                    text: reply, 
                    sender: "bot",
                    invoices: invoices
                }
            ]);

        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [
                ...prev, 
                { text: "Error: Unable to get response.", sender: "bot" }
            ]);
        }
    };

    const renderMessage = (msg, index) => {
        return (
            <Box key={index} sx={{ 
                textAlign: msg.sender === "user" ? "right" : "left",
                mb: 2,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start"
            }}>
                <Paper elevation={2} sx={{ 
                    p: 2,
                    display: "inline-block",
                    bgcolor: msg.sender === "user" ? "#e3f2fd" : "#f5f5f5",
                    borderRadius: msg.sender === "user" ? "18px 18px 0 18px" : "18px 18px 18px 0"
                }}>
                    <Typography variant="body1">{msg.text}</Typography>
                    
                    {msg.invoices && msg.invoices.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2">Invoice Details:</Typography>
                            <List dense sx={{ maxHeight: 150, overflow: 'auto' }}>
                                {msg.invoices.map((inv, idx) => (
                                    <ListItem key={idx} divider>
                                        <ListItemText
                                            primary={`Invoice #${inv.invoiceNumber} - ${inv.customerName}`}
                                            secondary={`Amount: $${inv.amount} | Status: ${inv.status} | Due: ${new Date(inv.dueDate).toLocaleDateString()}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                </Paper>
            </Box>
        );
    };

    return (
        <Container maxWidth="md" sx={{ height: "80vh", display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" sx={{ my: 3, textAlign: "center" }}>Invoice Assistant</Typography>
            
            <Box sx={{ 
                flexGrow: 1, 
                overflowY: "auto", 
                mb: 2,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column"
            }}>
                {messages.length === 0 ? (
                    <Typography color="text.secondary" textAlign="center">
                        Ask me about invoices, payments, or transactions...
                    </Typography>
                ) : (
                    messages.map((msg, index) => renderMessage(msg, index))
                )}
            </Box>
            
            <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your query..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button 
                    variant="contained" 
                    onClick={handleSendMessage}
                    disabled={!query.trim()}
                >
                    Send
                </Button>
            </Box>
        </Container>
    );
};

export default Chatbot;