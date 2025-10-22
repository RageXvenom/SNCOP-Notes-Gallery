import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Loader, Save, X, Plus, Trash2, Edit as EditIcon } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.full_name || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('User creation from the admin panel is not available. Please direct users to register at /register');
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!editingUser || !formData.email || !formData.full_name) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          email: formData.email,
          full_name: formData.full_name,
        })
        .eq('id', editingUser);

      if (profileError) throw profileError;

      if (formData.password) {
        setError('Password updates from admin panel are not supported. Users can update their own passwords from their profile page.');
        setLoading(false);
        return;
      }

      setSuccess('User profile updated successfully!');
      setFormData({ email: '', full_name: '', password: '', confirmPassword: '' });
      setEditingUser(null);
      await fetchUsers();
    } catch (error: any) {
      console.error('Error updating user:', error);
      setError(error.message || 'Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string, userEmail: string) => {
    if (!window.confirm(`Are you sure you want to delete user ${userEmail}? This action cannot be undone.`)) {
      return;
    }

    try {
      setLoading(true);
      setError('');

      const { error: deleteError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (deleteError) throw deleteError;

      setSuccess('User deleted successfully!');
      await fetchUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      setError(error.message || 'Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  const startEditUser = (user: UserProfile) => {
    setEditingUser(user.id);
    setFormData({
      email: user.email,
      full_name: user.full_name,
      password: '',
      confirmPassword: '',
    });
    setIsCreatingUser(false);
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setIsCreatingUser(false);
    setFormData({ email: '', full_name: '', password: '', confirmPassword: '' });
    setError('');
  };

  const startCreateUser = () => {
    setIsCreatingUser(true);
    setEditingUser(null);
    setFormData({ email: '', full_name: '', password: '', confirmPassword: '' });
    setError('');
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm">
        <p className="font-bold mb-2">User Management Features:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>View all registered SNCOP-AI users</li>
          <li>Edit user names and emails</li>
          <li>Delete user accounts</li>
          <li>New users should register at /register</li>
          <li>Password changes must be done by users from their profile page</li>
        </ul>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm">
          {success}
        </div>
      )}

      {(isCreatingUser || editingUser) && (
        <div className="glass-effect p-6 rounded-2xl fade-in-up enhanced-shadow">
          <h3 className="text-xl font-semibold mb-4 enhanced-text neon-glow">
            {isCreatingUser ? 'Create New User' : 'Edit User'}
          </h3>
          <form onSubmit={isCreatingUser ? handleCreateUser : handleUpdateUser} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-high-contrast mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none enhanced-text"
                  placeholder="Enter full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-high-contrast mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none enhanced-text"
                  placeholder="user@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-high-contrast mb-2">
                {isCreatingUser ? 'Password' : 'New Password (leave blank to keep current)'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none enhanced-text"
                  placeholder="Min. 6 characters"
                  required={isCreatingUser}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-high-contrast mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none enhanced-text"
                  placeholder="Confirm password"
                  required={isCreatingUser || formData.password !== ''}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover-scale font-bold shimmer-effect disabled:opacity-50"
              >
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    <span>{isCreatingUser ? 'Create User' : 'Update User'}</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover-scale"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {!isCreatingUser && !editingUser && (
        <div className="glass-effect p-6 rounded-2xl enhanced-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold enhanced-text neon-glow">SNCOP-AI Users</h3>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : users.length === 0 ? (
            <p className="text-sm enhanced-text opacity-80 text-center py-8">No users found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 enhanced-text font-bold">Name</th>
                    <th className="text-left py-3 px-4 enhanced-text font-bold">Email</th>
                    <th className="text-left py-3 px-4 enhanced-text font-bold">Created</th>
                    <th className="text-right py-3 px-4 enhanced-text font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="py-3 px-4 enhanced-text">{user.full_name}</td>
                      <td className="py-3 px-4 enhanced-text">{user.email}</td>
                      <td className="py-3 px-4 enhanced-text text-sm opacity-70">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => startEditUser(user)}
                            className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-700 dark:text-blue-300 rounded-lg hover-scale text-sm"
                          >
                            <EditIcon className="h-3 w-3" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id, user.email)}
                            className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 text-red-700 dark:text-red-300 rounded-lg hover-scale text-sm"
                          >
                            <Trash2 className="h-3 w-3" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
