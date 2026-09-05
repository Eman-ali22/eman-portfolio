import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Check } from 'lucide-react';
import { PortfolioData } from '../types';

interface EditorModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onSave: (data: PortfolioData) => void;
  onReset: () => void;
  onClose: () => void;
}

export const EditorModal: React.FC<EditorModalProps> = ({
  isOpen,
  data,
  onSave,
  onReset,
  onClose,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'skills' | 'projects'>('profile');
  const [formData, setFormData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));
  const [savedAlert, setSavedAlert] = useState(false);

  const handleProfileChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      id="editor-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="editor-modal-container"
        className="relative w-full max-w-4xl rounded-3xl bg-[#0d0d12] border border-white/10 shadow-2xl overflow-hidden my-6 text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Customize Portfolio Information
            </h2>
            {savedAlert && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onReset}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-white/[0.02] border-b border-white/10 text-xs font-semibold">
          {(['profile', 'experience', 'skills', 'projects'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl capitalize transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={formData.profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Professional Title</label>
                  <input
                    type="text"
                    value={formData.profile.title}
                    onChange={(e) => handleProfileChange('title', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Phone Number</label>
                  <input
                    type="text"
                    value={formData.profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Address</label>
                  <input
                    type="text"
                    value={formData.profile.address}
                    onChange={(e) => handleProfileChange('address', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Bio / Overview</label>
                  <textarea
                    rows={4}
                    value={formData.profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500 resize-y"
                  />
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                    Social & Profile Links
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">GitHub Profile URL</label>
                      <input
                        type="url"
                        placeholder="https://github.com/yourusername"
                        value={formData.profile.socials?.find((s) => s.platform === 'github')?.url || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          const updated = [...(formData.profile.socials || [])];
                          const idx = updated.findIndex((s) => s.platform === 'github');
                          if (idx >= 0) {
                            updated[idx] = { ...updated[idx], url: val };
                          } else {
                            updated.push({ platform: 'github', url: val, label: 'GitHub' });
                          }
                          handleProfileChange('socials', updated);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourusername"
                        value={formData.profile.socials?.find((s) => s.platform === 'linkedin')?.url || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          const updated = [...(formData.profile.socials || [])];
                          const idx = updated.findIndex((s) => s.platform === 'linkedin');
                          if (idx >= 0) {
                            updated[idx] = { ...updated[idx], url: val };
                          } else {
                            updated.push({ platform: 'linkedin', url: val, label: 'LinkedIn' });
                          }
                          handleProfileChange('socials', updated);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Kaggle URL</label>
                      <input
                        type="url"
                        placeholder="https://kaggle.com/yourusername"
                        value={formData.profile.socials?.find((s) => s.platform === 'kaggle')?.url || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          const updated = [...(formData.profile.socials || [])];
                          const idx = updated.findIndex((s) => s.platform === 'kaggle');
                          if (idx >= 0) {
                            updated[idx] = { ...updated[idx], url: val };
                          } else {
                            updated.push({ platform: 'kaggle', url: val, label: 'Kaggle' });
                          }
                          handleProfileChange('socials', updated);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">ResearchGate URL</label>
                      <input
                        type="url"
                        placeholder="https://researchgate.net/profile/yourusername"
                        value={formData.profile.socials?.find((s) => s.platform === 'researchgate')?.url || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          const updated = [...(formData.profile.socials || [])];
                          const idx = updated.findIndex((s) => s.platform === 'researchgate');
                          if (idx >= 0) {
                            updated[idx] = { ...updated[idx], url: val };
                          } else {
                            updated.push({ platform: 'researchgate', url: val, label: 'ResearchGate' });
                          }
                          handleProfileChange('socials', updated);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4">
              {formData.experiences.map((exp, idx) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].role = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].company = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Period</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].period = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].location = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const updated = [...formData.experiences];
                        updated[idx].description = e.target.value;
                        setFormData({ ...formData, experiences: updated });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white resize-y"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4">
              {formData.skills.map((group, gIdx) => (
                <div key={gIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="font-bold text-sm text-white">{group.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-white/10 border border-white/15 rounded-xl text-xs text-white">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              {formData.projects.map((proj, pIdx) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-sm font-bold text-white">{proj.title}</div>
                  <p className="text-xs text-gray-400">{proj.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-white/5 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-md shadow-blue-500/25 flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
