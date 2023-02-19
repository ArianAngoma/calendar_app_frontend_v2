import { FC } from 'react'

import { useAuthStore } from '../../hooks'

const Navbar: FC = () => {

  const { onLogout, user } = useAuthStore()

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">

      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        {user?.name}
      </span>

      <button
        className="btn btn-outline-danger"
        onClick={onLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Logout</span>
      </button>

    </div>
  )

}

export default Navbar