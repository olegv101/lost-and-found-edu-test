'use client';

import { useSearchParams } from 'next/navigation';
import ClaimForm from '@/app/components/ClaimForm';

const items = {
  '1': { id: '1', name: 'AirPods Pro', location: 'Doe Library' },
  '2': { id: '2', name: 'Hydro Flask', location: 'MLK Student Union' },
  '3': { id: '3', name: 'MacBook Pro', location: 'Soda Hall' },
};

export default function ClaimPage() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get('id');
  const item = itemId ? items[itemId as keyof typeof items] : null;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003262] mb-4">Item Not Found</h1>
          <p className="text-gray-600">The requested item could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#003262]">Claim Your Item</h1>
        <ClaimForm 
          itemId={item.id}
          itemName={item.name}
          location={item.location}
        />
      </div>
    </div>
  );
}
