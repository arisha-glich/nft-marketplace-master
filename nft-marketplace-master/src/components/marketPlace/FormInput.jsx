import React from 'react';

export function FormInput({ label, name, value, onChange, type = 'text', error }) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full p-2 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <span className="text-red-500 text-xs absolute bottom-0">{error}</span>}
    </div>
  );
}
