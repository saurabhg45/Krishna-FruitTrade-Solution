import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <header className="admin-header navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Logo or Admin Title */}
            <Link to="/admin" className="navbar-brand">
              Fresh Horizons
            </Link>

            {/* Navigation Toggler for Mobile View */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#adminNavbar"
              aria-controls="adminNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="adminNavbar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* Dashboard Menu */}
                <li className="nav-item dropdown">
                  <Link
                    to="/product-catalog"
                    className="nav-link dropdown-toggle"
                    id="dashboardDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catalog
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dashboardDropdown"
                  >
                    <li>
                      <Link to="/cart" className="dropdown-item">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/product" className="dropdown-item">
                        Product Card
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* User Management Menu */}
                <li className="nav-item dropdown">
                  <Link
                    to="/order-tracking"
                    className="nav-link dropdown-toggle"
                    id="userManagementDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Order Tracking
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="userManagementDropdown"
                  >
                    <li>
                      <Link
                        to="/admin/user-management/list"
                        className="dropdown-item"
                      >
                        User List
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/user-management/add"
                        className="dropdown-item"
                      >
                        Add User
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Banana Product Management */}
                <li className="nav-item dropdown">
                  <Link
                    to="/admin/banana-management"
                    className="nav-link dropdown-toggle"
                    id="bananaManagementDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Banana Management
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="bananaManagementDropdown"
                  >
                    <li>
                      <Link
                        to="/admin/banana-management/list"
                        className="dropdown-item"
                      >
                        Banana List
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/banana-management/add"
                        className="dropdown-item"
                      >
                        Add Banana
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Order Management */}
                <li className="nav-item dropdown">
                  <Link
                    to="/admin/order-management"
                    className="nav-link dropdown-toggle"
                    id="orderManagementDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Order Management
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="orderManagementDropdown"
                  >
                    <li>
                      <Link
                        to="/admin/order-management/list"
                        className="dropdown-item"
                      >
                        Order List
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/order-management/status"
                        className="dropdown-item"
                      >
                        Update Order Status
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Reports and Analytics */}
                <li className="nav-item dropdown">
                  <Link
                    to="/admin/reports"
                    className="nav-link dropdown-toggle"
                    id="reportsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="reportsDropdown"
                  >
                    <li>
                      <Link
                        to="/admin/reports/export"
                        className="dropdown-item"
                      >
                        Export Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/reports/sales-trends"
                        className="dropdown-item"
                      >
                        Sales Trends
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Logout Button */}
              <div className="d-flex">
                <button className="btn btn-outline-light" onClick={Logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
};

// <header>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/product-catalog">Catalog</Link>
//       </li>
//       <li>
//         <Link to="/order-tracking">Track Order</Link>
//       </li>
//       <li>
//         <Link to="/order-history">Order History</Link>
//       </li>
//       <li>
//         <Link to="/payment-management">Payments</Link>
//       </li>
//       <li>
//         <Link to="/support">Support</Link>
//       </li>
//     </ul>
//   </nav>
// </header>

export default Header;
