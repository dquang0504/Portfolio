"use client";
import toast, { Toaster } from "react-hot-toast";

// Outer-space themed toast box
const ToastBox = ({ type, message }: { type: "success" | "error"; message: string }) => {
  const isSuccess = type === "success";
  return (
    <div
      style={{
        padding: "1em 1.5em",
        minWidth: "260px",
        background: isSuccess
          ? "linear-gradient(135deg, #0f2027, #2c5364, #00d4ff)"
          : "linear-gradient(135deg, #1a0000, #660000, #ff0033)",
        color: "#fff",
        fontFamily: "Orbitron, sans-serif",
        borderRadius: "12px",
        boxShadow: isSuccess
          ? "0 0 15px rgba(0, 212, 255, 0.8)"
          : "0 0 15px rgba(255, 0, 50, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.8em",
        animation: "floatUp 0.5s ease",
      }}
    >
      <span style={{ fontSize: "1.3em" }}>
        {isSuccess ? "🚀" : "🛑"}
      </span>
      <span>{message}</span>
      <style>
        {`
          @keyframes floatUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

// Wrapper API
export const SpaceToast = {
  success: (msg: string) =>
    toast.custom(<ToastBox type="success" message={msg} />, {
      duration: 3000,
      position: "top-right",
    }),
  error: (msg: string) =>
    toast.custom(<ToastBox type="error" message={msg} />, {
      duration: 4000,
      position: "top-right",
    }),
};

// Provider to render Toaster
export const SpaceToastProvider = () => (
  <Toaster position="top-right" />
);
