function Navbar({ onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }

    return (
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

export default Navbar
