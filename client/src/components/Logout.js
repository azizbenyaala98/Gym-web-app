import React from 'react'

function Logout() {
    const logout = (e) => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload(false);
      };
  return (
    <div onClick={logout}> logout</div>
  )
}

export default Logout