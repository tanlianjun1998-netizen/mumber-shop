import React from 'react';

export default function RobuxStore() {
  const [adminMode, setAdminMode] = React.useState(window.location.pathname === '/admin');

  const orders = [
    { user: 'Player123', package: '400 Robux', status: 'Pending' },
    { user: 'RobloxKing', package: '1000 Robux', status: 'Completed' }
  ];

  const plans = [
    { amount: '200 Robux', price: 'RM5.40' },
    { amount: '400 Robux', price: 'RM10.80' },
    { amount: '800 Robux', price: 'RM21.60' },
    { amount: '1000 Robux', price: 'RM26.00' }
  ];

  const submitOrder = () => {
    alert('Order submitted successfully. Please wait for Mumber Shop to process.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        

        {adminMode ? (
          <section className="bg-slate-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
            <div className="space-y-4">
              {orders.map((order, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded-xl flex justify-between">
                  <div>
                    <p><strong>User:</strong> {order.user}</p>
                    <p><strong>Package:</strong> {order.package}</p>
                  </div>
                  <div>
                    <p>{order.status}</p>
                    <button className="mt-2 bg-green-500 px-3 py-1 rounded-lg">
                      Mark Complete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <>
            <header className="text-center py-12">
              <h1 className="text-5xl font-bold">Mumber Shop</h1>
              <p className="text-slate-300 mt-4">Fast Robux Top Up · Secure Payment · Auto Processing</p>
            </header>

            <div className="grid md:grid-cols-4 gap-6">
              {plans.map((p, i) => (
                <div key={i} className="bg-slate-800 rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-semibold">{p.amount}</h2>
                  <p className="text-3xl font-bold my-4">{p.price}</p>
                  <button className="w-full bg-green-500 py-3 rounded-xl">Buy Now</button>
                </div>
              ))}
            </div>

            <section className="mt-16 bg-slate-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Submit Order</h3>
              <div className="grid gap-4">
                <input placeholder="Roblox Username" className="p-3 rounded-xl bg-slate-800" />
                <select className="p-3 rounded-xl bg-slate-800">
                  <option>Select Robux Package</option>
                  {plans.map((p, i) => (
                    <option key={i}>{p.amount} - {p.price}</option>
                  ))}
                </select>
                <input type="file" className="p-3 rounded-xl bg-slate-800" />
                <button onClick={submitOrder} className="bg-green-500 py-3 rounded-xl">
                  Submit Order
                </button>
              </div>
            </section>

            <section className="mt-16 bg-slate-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">QR Payment</h3>
              <img src="/mnt/data/image.png" alt="QR Payment" className="rounded-xl max-w-xs mx-auto" />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

