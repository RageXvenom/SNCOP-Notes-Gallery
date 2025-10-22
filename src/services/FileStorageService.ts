// FileStorageService.ts
import axios from 'axios';

// ✅ Force API base to production endpoint
const API_BASE = 'https://api.arvindnag.site/api';

export interface FileUploadData {
  title: string;
  description: string;
  subject: string;
  unit?: string;
  type: 'notes' | 'practice-tests' | 'practicals';
  file: File | null;
}

export const fileStorageService = {
  async checkServerHealth(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/storage-sync`);
      return res.ok;
    } catch (error) {
      console.error('checkServerHealth error:', error);
      return false;
    }
  },

  async syncWithServer() {
    try {
      const res = await fetch(`${API_BASE}/storage-sync`);
      if (!res.ok) throw new Error('Failed to sync with server');
      return await res.json();
    } catch (error) {
      console.error('syncWithServer error:', error);
      return null;
    }
  },

  async uploadFile(data: FileUploadData) {
    if (!data.file) throw new Error('No file selected');

    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('title', data.title);
    formData.append('description', data.description || '');
    formData.append('subject', data.subject);
    formData.append('unit', data.unit || '');
    formData.append('type', data.type);

    try {
      const res = await axios.post(`${API_BASE}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return res.data.file;
    } catch (error) {
      console.error('uploadFile error:', error);
      throw error;
    }
  },

  async deleteFile(subject: string, type: string, filename: string, unit?: string) {
    try {
      let url = `${API_BASE}/files/${encodeURIComponent(subject)}/${encodeURIComponent(type)}`;
      if (unit && type === 'notes') {
        url += `/${encodeURIComponent(unit)}`;
      }
      url += `/${encodeURIComponent(filename)}`;

      console.log('DELETE file request URL:', url);
      const res = await fetch(url, { method: 'DELETE' });
      const data = await res.json();
      return data.success;
    } catch (error) {
      console.error('deleteFile error:', error);
      return false;
    }
  },

  // ✅ Fixed subject deletion with deep logging
  async deleteSubject(subjectName: string): Promise<boolean> {
    const url = `${API_BASE}/subjects/${encodeURIComponent(subjectName)}`;
    console.log('DELETE subject request URL:', url);
    try {
      const res = await fetch(url, { method: 'DELETE' });
      const raw = await res.text();
      console.log('DELETE subject raw response:', raw);
      if (!res.ok) {
        console.error(`deleteSubject failed: HTTP ${res.status}`);
        return false;
      }
      const data = JSON.parse(raw);
      return data.success;
    } catch (error) {
      console.error('deleteSubject error:', error);
      return false;
    }
  },

  async createSubject(subjectName: string, units: string[]) {
    try {
      const res = await axios.post(`${API_BASE}/subjects`, { name: subjectName, units });
      return res.data.success;
    } catch (error) {
      console.error('createSubject error:', error);
      return false;
    }
  },

  async addUnit(subjectName: string, unitName: string) {
    try {
      const res = await axios.post(`${API_BASE}/subjects/${encodeURIComponent(subjectName)}/units`, { unitName });
      return res.data.success;
    } catch (error) {
      console.error('addUnit error:', error);
      return false;
    }
  },

  async checkFileExists(subject: string, type: string, filename: string, unit?: string) {
    try {
      let url = `${API_BASE}/files/${encodeURIComponent(subject)}/${encodeURIComponent(type)}`;
      if (unit && type === 'notes') {
        url += `/${encodeURIComponent(unit)}`;
      }
      url += `/${encodeURIComponent(filename)}`;

      const res = await fetch(url, { method: 'HEAD' });
      return res.ok;
    } catch (error) {
      console.error('checkFileExists error:', error);
      return false;
    }
  }
};
