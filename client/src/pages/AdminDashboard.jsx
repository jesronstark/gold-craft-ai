const AdminDashboard = () => {
  return (
    <div className="bg-dark text-white min-h-screen p-8">
      <h1 className="text-4xl font-playfair text-primary mb-8 border-b border-gray-700 pb-4">SECRET ADMIN PANEL</h1>
      <p className="text-red-500 font-bold mb-8 text-xl">WARNING: NOT FOR CLIENT VIEW</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded border border-primary">
          <h3 className="text-gray-400 text-sm font-bold">Total Orders</h3>
          <p className="text-3xl font-bold">1,248</p>
        </div>
        <div className="bg-gray-800 p-6 rounded border border-primary">
          <h3 className="text-gray-400 text-sm font-bold">Revenue</h3>
          <p className="text-3xl font-bold">₹2.4 Cr</p>
        </div>
        <div className="bg-gray-800 p-6 rounded border border-primary">
          <h3 className="text-gray-400 text-sm font-bold">Total Customers</h3>
          <p className="text-3xl font-bold">15,247</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-8 rounded border border-primary mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Bank Auction Sourcing Data (CONFIDENTIAL)</h2>
        <div className="grid grid-cols-2 text-sm gap-4">
          <p><strong>Batch:</strong> BA-2026-SBI-Chennai-04</p>
          <p><strong>Bank Origin:</strong> State Bank of India</p>
          <p><strong>Total Weight Procured:</strong> 5.2 Kg</p>
          <p><strong>Procurement Price (22K):</strong> ₹6,100/g</p>
          <p><strong>Retail Price (22K):</strong> ₹6,554/g</p>
          <p><strong>Gross Margin:</strong> ~7.4%</p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;