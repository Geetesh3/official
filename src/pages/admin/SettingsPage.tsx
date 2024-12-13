import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface Settings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const initialSettings: Settings = {
  siteName: 'Geetesh Enterprises',
  siteDescription: 'Your trusted partner in digital transformation',
  contactEmail: 'info@geeteshenterprises.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Business Street, Tech City, TC 12345',
  socialMedia: {
    facebook: 'https://facebook.com/geeteshenterprises',
    twitter: 'https://twitter.com/geeteshent',
    instagram: 'https://instagram.com/geeteshent',
    linkedin: 'https://linkedin.com/company/geeteshenterprises'
  }
};

const SettingsPage = () => {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a backend
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Website Settings</h1>
        {isSaved && (
          <div className="text-green-600 flex items-center">
            <span className="mr-2">✓</span> Settings saved successfully
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Site Description</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
              <input
                type="text"
                value={settings.contactPhone}
                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Social Media Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Facebook</label>
              <input
                type="url"
                value={settings.socialMedia.facebook}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, facebook: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="url"
                value={settings.socialMedia.twitter}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, twitter: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram</label>
              <input
                type="url"
                value={settings.socialMedia.instagram}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, instagram: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                value={settings.socialMedia.linkedin}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, linkedin: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;