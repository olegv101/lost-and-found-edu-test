import ClaimForm from '@/app/components/ClaimForm';

// This would typically fetch from your database
const getItemDetails = async (id: string) => {
  // Mock data for now
  const items = {
    '1': { id: '1', name: 'AirPods Pro', location: 'Library - 2nd Floor' },
    '2': { id: '2', name: 'Hydro Flask', location: 'Student Center' },
    '3': { id: '3', name: 'MacBook Pro', location: 'Engineering Building' },
  };
  return items[id as keyof typeof items];
};

export default async function ClaimPage({ params }: { params: { id: string } }) {
  const item = await getItemDetails(params.id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Claim Your Item</h1>
        <ClaimForm 
          itemId={item.id}
          itemName={item.name}
          location={item.location}
        />
      </div>
    </div>
  );
} 