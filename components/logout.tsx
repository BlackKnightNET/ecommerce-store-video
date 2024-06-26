import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const { signOut } = useClerk();
  const [isHovered, setIsHovered] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button
      onClick={handleLogout}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isHovered ? '#d32f2f' : '#f44336',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        padding: '6px 9px', // Reduced padding
        borderRadius: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '100%', // Make the button full width
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '5px', fontSize: '14px' }}>Logout</span> {/* Reduced font size */}
        <FiLogOut size={16} /> {/* Adjust the size of the icon */}
      </div>
    </button>
  </div>
    
  );
};

export default LogoutButton;