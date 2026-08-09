import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  stats?: string[];
  link?: string;
  isUnderDevelopment?: boolean;
}

interface DevelopmentModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

const DevelopmentModal: React.FC<DevelopmentModalProps> = ({
  project,
  onClose,
  isOpen,
}) => {
  useEffect(() => {
    console.log("Modal isOpen:", isOpen);
    console.log("Modal project:", project); // Debug log

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  if (!isOpen || !project) {
    console.log("Modal not showing - isOpen:", isOpen, "project:", project); // Debug log
    return null;
  }

  console.log("Rendering modal for:", project.title); // Debug log

  const modalElement = document.createElement("div");
  modalElement.id = "modal-root-" + Date.now();
  document.body.appendChild(modalElement);

  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          maxWidth: "450px",
          width: "100%",
          padding: "32px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#0f172a",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#94a3b8",
              padding: "0 0 0 20px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: "1.7",
              margin: "0 0 12px 0",
            }}
          >
            This project is currently in development. We're working hard to
            bring you an amazing experience. Stay tuned for the launch!
          </p>
          {project.description && (
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              {project.description}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#f97316",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ea580c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f97316";
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalElement);
};

export default DevelopmentModal;
