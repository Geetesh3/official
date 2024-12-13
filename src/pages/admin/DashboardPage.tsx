import React from 'react';
import { FileText, Users, MessageSquare } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Blog Posts
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    12
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Services
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    6
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    New Messages
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    3
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-4 bg-white shadow rounded-lg">
          <ul className="divide-y divide-gray-200">
            <li className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New blog post published</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            </li>
            <li className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Service updated</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
              </div>
            </li>
            <li className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New contact message</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;