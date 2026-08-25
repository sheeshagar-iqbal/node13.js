import React from "react";
const styles = {
  card: {
    width: "320px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    margin: "20px",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  details: {
    padding: "18px",
  },

  name: {
    margin: "0 0 15px",
    color: "#222",
    fontSize: "22px",
  },

  text: {
    margin: "8px 0",
    color: "#555",
    fontSize: "15px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "18px",
  },

  button: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },

  update: {
    backgroundColor: "#1976d2",
  },

  delete: {
    backgroundColor: "#d32f2f",
  },
};
const UserCard = ({ user, onUpdate, onDelete ,onshow}) => {
  return (
    <div style={styles.card}>

      {/* Image */}
      <img
        src={`http://localhost:5000/uploads/${user.image}`}
        alt={user.firstname}
        style={styles.image}
      />

      {/* User Details */}
      <div style={styles.details}>
        <h2 style={styles.name}>
          {user.firstname} {user.lastname}
        </h2>

        <p style={styles.text}>
          <strong>Email:</strong> {user.email}
        </p>

        <p style={styles.text}>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p style={styles.text}>
          <strong>Gender:</strong> {user.geentr}
        </p>

        {/* Buttons */}
        <div style={styles.buttons}>
          <button
            style={{ ...styles.button, ...styles.update }}
            onClick={() => (onUpdate(user),onshow(true))}
          >
            ✏️ Update
          </button>

          <button
            style={{ ...styles.button, ...styles.delete }}
            onClick={() => onDelete(user._id)}
          >
            🗑️ Delete
          </button>
        </div>
      </div>

    </div>
  );
};



export default UserCard;