/**
 * DCR Logistics - Enquiry and Lead Storage System
 * 
 * Provides:
 * - Persistent local storage for quotes and contact messages
 * - Forwarding to remote webhook/backend when configured
 * - CSV and JSON export for business management
 */

import { COMPANY_CONFIG } from '../config/company';

const STORAGE_KEY = 'dcr_logistics_enquiries';

export async function saveInquiry(data, type = 'quote') {
  const timestamp = new Date().toISOString();
  const id = `DCR-${type.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-6)}`;
  
  const record = {
    id,
    type, // 'quote' | 'contact'
    createdAt: timestamp,
    status: 'Received',
    ...data,
  };

  // 1. Save locally in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const updated = [record, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Trigger custom event for real-time dashboard updates
    window.dispatchEvent(new CustomEvent('dcr_new_inquiry', { detail: record }));
  } catch (err) {
    console.error('Error saving inquiry locally:', err);
  }

  // 2. Dispatch email to /api/send-enquiry (or custom webhook)
  let remoteSuccess = false;
  let remoteError = null;
  const webhookUrl = COMPANY_CONFIG.enquiryConfig.webhookEndpoint || '/api/send-enquiry';

  if (webhookUrl && webhookUrl.trim() !== '') {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(record)
      });
      const resJson = await response.json().catch(() => ({}));
      if (response.ok && resJson.success !== false) {
        remoteSuccess = true;
      } else {
        remoteError = resJson.error || `Server returned status ${response.status}`;
      }
    } catch (err) {
      remoteError = err.message || 'Network error delivering inquiry';
      console.warn('Delivery notice:', remoteError);
    }
  }

  return {
    success: true,
    id,
    record,
    remoteSent: remoteSuccess,
    remoteConfigured: true,
    remoteError
  };
}

export function getAllInquiries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function deleteInquiry(id) {
  try {
    const existing = getAllInquiries();
    const filtered = existing.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

export function clearAllInquiries() {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportInquiriesAsCSV() {
  const records = getAllInquiries();
  if (!records.length) return null;

  const headers = ['ID', 'Type', 'Created At', 'Name', 'Company', 'Phone', 'Email', 'Service', 'Space', 'Location', 'Start Date', 'Notes/Message'];
  
  const rows = records.map(r => [
    r.id,
    r.type,
    r.createdAt,
    `"${(r.name || '').replace(/"/g, '""')}"`,
    `"${(r.company || '').replace(/"/g, '""')}"`,
    `"${(r.phone || '').replace(/"/g, '""')}"`,
    `"${(r.email || '').replace(/"/g, '""')}"`,
    `"${(r.service || r.serviceRequired || '').replace(/"/g, '""')}"`,
    `"${(r.space || r.warehouseRequirement || '').replace(/"/g, '""')}"`,
    `"${(r.location || '').replace(/"/g, '""')}"`,
    `"${(r.startDate || '').replace(/"/g, '""')}"`,
    `"${(r.requirements || r.message || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `DCR_Logistics_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}

