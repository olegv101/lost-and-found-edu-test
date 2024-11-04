'use client';

import { useState, FormEvent } from 'react';

interface ClaimFormProps {
  itemId: string;
  itemName: string;
  location: string;
}

export default function ClaimForm({ itemId, itemName, location }: ClaimFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId,
          ...formData
        }),
      });
      
      if (response.ok) {
        alert('Claim submitted successfully!');
      } else {
        throw new Error('Failed to submit claim');
      }
    } catch (error) {
      alert('Error submitting claim. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto text-black">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-black">Item Details:</h2>
        <p className="text-black">{itemName}</p>
        <p className="text-black">Found at: {location}</p>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-black mb-2">
          Describe your lost item
        </label>
        <textarea
          id="description"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 text-black bg-white"
          placeholder="Please provide specific details about your item..."
          value={formData.description}
          onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Submit Claim
      </button>
    </form>
  );
} 