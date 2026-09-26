import { useState } from 'react';
import { Truck, Package, CheckCircle2, Clock, Eye, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock order history data
const mockOrders = [
  {
    id: 'ORD-2026-8941',
    date: 'Oct 24, 2026',
    status: 'In Transit',
    total: 2218.00,
    itemsCount: 2,
    trackingNumber: 'TRK-9982341109',
    estimatedDelivery: 'Oct 28, 2026',
    items: [
      { name: 'Apex Titan RTX 5090 OC', price: 1999.00, quantity: 1, category: 'GPU' },
      { name: 'HydroShift Liquid Cooler 360', price: 219.00, quantity: 1, category: 'Cooling' }
    ]
  },
  {
    id: 'ORD-2026-7230',
    date: 'Sep 12, 2026',
    status: 'Delivered',
    total: 589.00,
    itemsCount: 1,
    trackingNumber: 'TRK-8810293481',
    estimatedDelivery: 'Sep 15, 2026',
    items: [
      { name: 'Core Ultra 9 285K Processor', price: 589.00, quantity: 1, category: 'CPU' }
    ]
  },
  {
    id: 'ORD-2026-5192',
    date: 'Aug 03, 2026',
    status: 'Processing',
    total: 399.00,
    itemsCount: 1,
    trackingNumber: 'TRK-3392019482',
    estimatedDelivery: 'Pending',
    items: [
      { name: 'Cyberpunk Motherboard Z890', price: 399.00, quantity: 1, category: 'Motherboard' }
    ]
  }
];

export default function Order() {
  const [orders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col selection:bg-purple-600 selection:text-white relative">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0d0d0f] max-w-6xl mx-auto w-full p-6 md:p-10 pt-8 space-y-8">
        
        {/* Page Title & Stats Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Order History</h1>
            <p className="text-xs text-neutral-400 mt-0.5">Track, review, and manage your component orders.</p>
          </div>
          
          <div className="bg-[#161619] px-4 py-2 rounded-2xl border border-neutral-800 flex items-center space-x-3 w-fit shadow-inner">
            <Package className="w-4 h-4 text-purple-400" />
            <div>
              <span className="text-sm font-bold text-white">{orders.length}</span>
              <span className="text-[10px] text-neutral-400 block uppercase font-bold tracking-wider">Total Orders</span>
            </div>
          </div>
        </div>

        {/* Orders Body */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="bg-[#161619] border border-neutral-800 rounded-3xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-purple-500/40 transition-all shadow-lg"
            >
              {/* Order Meta */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-base font-bold text-white">{order.id}</span>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                    order.status === 'Delivered' 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                      : order.status === 'In Transit'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    {order.status === 'Delivered' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {order.status === 'In Transit' && <Truck className="w-3.5 h-3.5" />}
                    {order.status === 'Processing' && <Clock className="w-3.5 h-3.5" />}
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  Placed on <span className="text-neutral-200 font-medium">{order.date}</span> • Est. Delivery: <span className="text-neutral-200 font-medium">{order.estimatedDelivery}</span>
                </p>
              </div>

              {/* Items & Total info */}
              <div className="flex items-center space-x-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">Items</span>
                  <span className="text-sm font-semibold text-neutral-200">{order.itemsCount} Unit(s)</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">Order Total</span>
                  <span className="text-base font-bold text-white">${order.total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => setSelectedOrder(order)}
                  className="px-4 py-2.5 bg-[#0f0f12] hover:bg-neutral-800 text-neutral-200 text-xs font-semibold rounded-xl border border-neutral-800 transition-all flex items-center space-x-2 cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
  <Footer />

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setSelectedOrder(null)}></div>

          <div className="relative bg-[#161619] border border-neutral-800 rounded-3xl w-full max-w-lg p-7 shadow-2xl z-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <h3 className="text-lg font-bold text-white">Order Summary</h3>
                <p className="text-xs text-neutral-400 mt-0.5">{selectedOrder.id}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-neutral-400 hover:text-white text-sm font-bold px-3 py-1.5 bg-[#0f0f12] rounded-xl border border-neutral-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Tracking info */}
            <div className="bg-[#0f0f12] p-4 rounded-2xl border border-neutral-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Tracking Code:</span>
                <span className="text-purple-400 font-mono font-bold">{selectedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Fulfillment Status:</span>
                <span className="text-white font-semibold">{selectedOrder.status}</span>
              </div>
            </div>

            {/* Product list in order */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">Purchased Parts</span>
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-[#0f0f12] p-3.5 rounded-xl border border-neutral-800">
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.name}</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{item.category} • Qty: {item.quantity}</p>
                  </div>
                  <span className="text-xs font-bold text-white">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-sm font-bold text-neutral-400">Total Paid:</span>
              <span className="text-lg font-bold text-white">${selectedOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}