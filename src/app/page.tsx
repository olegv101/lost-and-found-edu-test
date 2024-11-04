import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-[#003262]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="mb-6">
            <Image
              src="/berkeley.png"
              alt="UC Berkeley Logo"
              width={120}
              height={120}
              className="mb-4"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Ryder's Cal Lost & Found
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl text-[#FDB515]">
            Reconnecting Golden Bears with their belongings
          </p>
        </div>
      </div>

      {/* Recently Found Items Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003262]">Recently Found Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#003262]">
              <div className="relative h-48 w-full">
                <Image
                  src="/airpod.jpeg"
                  alt="Found AirPods"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#003262]">AirPods Pro</h3>
                <p className="text-gray-600 mb-4">Found near Doe Library</p>
                <div className="bg-[#FDB515] text-[#003262] px-3 py-1 rounded-full inline-block mb-4 font-semibold">
                  Bounty: $20
                </div>
                <Link
                  href={`/claim?id=1`}
                  className="block w-full bg-[#003262] text-white py-2 rounded-lg hover:bg-[#004280] transition text-center"
                >
                  Claim Item
                </Link>
              </div>
            </div>

            {/* Item Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#003262]">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/water-bottle.jpg"
                  alt="Found Water Bottle"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#003262]">Hydro Flask</h3>
                <p className="text-gray-600 mb-4">Found at MLK Student Union</p>
                <div className="bg-[#FDB515] text-[#003262] px-3 py-1 rounded-full inline-block mb-4 font-semibold">
                  Bounty: $10
                </div>
                <Link
                  href={`/claim?id=2`}
                  className="block w-full bg-[#003262] text-white py-2 rounded-lg hover:bg-[#004280] transition text-center"
                >
                  Claim Item
                </Link>
              </div>
            </div>

            {/* Item Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#003262]">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/laptop.jpg"
                  alt="Found Laptop"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#003262]">MacBook Pro</h3>
                <p className="text-gray-600 mb-4">Found in Soda Hall</p>
                <div className="bg-[#FDB515] text-[#003262] px-3 py-1 rounded-full inline-block mb-4 font-semibold">
                  Bounty: $50
                </div>
                <Link
                  href={`/claim?id=3`}
                  className="block w-full bg-[#003262] text-white py-2 rounded-lg hover:bg-[#004280] transition text-center"
                >
                  Claim Item
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#003262] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-[#FDB515] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#003262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#FDB515]">Easy Search</h3>
            <p className="text-white opacity-90">Quickly search through all reported items across campus</p>
          </div>
          <div className="text-center">
            <div className="bg-[#FDB515] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#003262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#FDB515]">Instant Notifications</h3>
            <p className="text-white opacity-90">Get notified when your item is found</p>
          </div>
          <div className="text-center">
            <div className="bg-[#FDB515] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#003262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#FDB515]">Bear Community</h3>
            <p className="text-white opacity-90">Connect with fellow Bears to recover lost items</p>
          </div>
        </div>
      </section>
    </main>
  );
}
