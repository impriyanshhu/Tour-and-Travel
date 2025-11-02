import React from 'react';
import { useLocation } from 'react-router-dom';

const BookNow = () => {
  const location = useLocation();
  const tourName = location.state?.tour || "";

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Book Your Tour</h1>

      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Tour</label>
          <input
            type="text"
            value={tourName}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Date</label>
          <input type="date" className="w-full border rounded px-3 py-2" required/>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Guests</label>
          <input type="number" min="1" defaultValue={1} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookNow;
