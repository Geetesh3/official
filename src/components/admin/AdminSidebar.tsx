import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, Users, MessageSquare } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const AdminSidebar = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        <Link
          to="/admin"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/admin/blogs"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
        >
          <FileText className="h-5 w-5 mr-3" />
          Blogs
        </Link>
        <Link
          to="/admin/services"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Users className="h-5 w-5 mr-3" />
          Services
        </Link>
        <Link
          to="/admin/messages"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
        >
          <MessageSquare className="h-5 w-5 mr-3" />
          Messages
        </Link>
        <Link
          to="/admin/settings"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Settings className="h-5 w-5 mr-3" />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 w-full"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;