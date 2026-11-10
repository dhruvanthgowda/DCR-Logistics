import React, { useState, useEffect } from 'react';
import { Database, Download, Trash2, X, RefreshCw, Mail, Phone, Clock } from 'lucide-react';
import { getAllInquiries, deleteInquiry, clearAllInquiries, exportInquiriesAsCSV } from '../utils/inquiryStorage';

export default function InquiryViewerModal({ isOpen, onClose }) {
  const [inquiries, setInquiries] = useState([]);

  const loadData = () => {
    setInquiries(getAllInquiries());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
    const handleNew = () => loadData();
    window.addEventListener('dcr_new_inquiry', handleNew);
    return () => window.removeEventListener('dcr_new_inquiry', handleNew);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = (id) => {
    if (window.confirm(`Delete inquiry ${id}?`)) {
      deleteInquiry(id);
      loadData();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all inquiries recorded on this browser?')) {
      clearAllInquiries();
      loadData();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0B192C] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                Internal Lead Management
              </span>
              <h3 className="text-xl font-black text-white">
                Recorded Enquiries & Quotes ({inquiries.length})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              title="Refresh"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="text-slate-600">
            Submissions are saved locally in real-time. Connect a backend webhook in <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-slate-800">src/config/company.js</code> to forward directly to your email inbox.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={exportInquiriesAsCSV}
              disabled={!inquiries.length}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-50 transition"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
            <button
              onClick={handleClearAll}
              disabled={!inquiries.length}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 disabled:opacity-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {!inquiries.length ? (
            <div className="text-center py-12 text-slate-400">
              <Database className="w-12 h-12 mx-auto stroke-1 text-slate-300 mb-2" />
              <p className="text-sm font-semibold text-slate-600">No customer enquiries received yet</p>
              <p className="text-xs text-slate-400 mt-1">Submit a quote request or contact message on the site to see it recorded here.</p>
            </div>
          ) : (
            inquiries.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-slate-200 hover:border-orange-300 bg-white shadow-sm transition space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      item.type === 'quote' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-slate-400 hover:text-red-600 transition p-1"
                    title="Delete record"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact</span>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    {item.company && <p className="text-slate-600">{item.company}</p>}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Details</span>
                    <p className="text-slate-800 flex items-center gap-1 font-mono">
                      <Phone className="w-3 h-3 text-orange-500" /> {item.phone}
                    </p>
                    {item.email && (
                      <p className="text-slate-600 flex items-center gap-1 truncate">
                        <Mail className="w-3 h-3 text-slate-400" /> {item.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Scope</span>
                    <p className="font-semibold text-orange-600">{item.service || item.serviceRequired || 'Logistics'}</p>
                    {item.space && <p className="text-slate-600">Space: {item.space}</p>}
                    {item.startDate && <p className="text-slate-500">Start: {item.startDate}</p>}
                  </div>
                </div>

                {(item.requirements || item.message) && (
                  <div className="bg-slate-50 p-2.5 rounded-xl text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Notes / Scope: </span>
                    {item.requirements || item.message}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

