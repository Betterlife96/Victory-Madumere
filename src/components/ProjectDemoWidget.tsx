import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, ShoppingCart, Check, CreditCard, Star, AlertCircle, ArrowRight } from 'lucide-react';

interface ProjectDemoWidgetProps {
  type: 'analytics' | 'ecommerce' | 'sentiment';
}

export const ProjectDemoWidget: React.FC<ProjectDemoWidgetProps> = ({ type }) => {
  // 1. Analytics state
  const [isStreaming, setIsStreaming] = useState(true);
  const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h'>('6h');
  const [dataPoints, setDataPoints] = useState<number[]>([42, 58, 65, 80, 72, 94, 88, 102, 115, 98, 124, 138]);

  useEffect(() => {
    if (type !== 'analytics' || !isStreaming) return;
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const nextVal = Math.floor(Math.random() * 40) + 90;
        return [...prev.slice(1), nextVal];
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [type, isStreaming]);

  // 2. E-commerce state
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([
    { id: '1', name: 'Minimalist Mechanical Keyboard', price: 189, qty: 1 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // 3. Sentiment state
  const [reviewInput, setReviewInput] = useState(
    'The checkout process was exceptionally fast and intuitive. Great responsive design!'
  );
  const [analyzedSentiment, setAnalyzedSentiment] = useState<{
    score: number;
    sentiment: 'Positive' | 'Neutral' | 'Negative';
    confidence: number;
    isUrgent: boolean;
  }>({
    score: 94,
    sentiment: 'Positive',
    confidence: 96,
    isUrgent: false,
  });

  const analyzeReview = (text: string) => {
    setReviewInput(text);
    const lower = text.toLowerCase();
    if (lower.includes('slow') || lower.includes('broken') || lower.includes('bug') || lower.includes('terrible') || lower.includes('refund')) {
      setAnalyzedSentiment({ score: 24, sentiment: 'Negative', confidence: 92, isUrgent: true });
    } else if (lower.includes('okay') || lower.includes('average') || lower.includes('fine')) {
      setAnalyzedSentiment({ score: 55, sentiment: 'Neutral', confidence: 78, isUrgent: false });
    } else {
      setAnalyzedSentiment({ score: 92, sentiment: 'Positive', confidence: 95, isUrgent: false });
    }
  };

  if (type === 'analytics') {
    const currentThroughput = dataPoints[dataPoints.length - 1];
    const maxVal = Math.max(...dataPoints, 150);

    return (
      <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-sans">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-blue-400 font-semibold">Interactive Prototype</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">WebSocket Live Ingestion Simulator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs font-mono">
              {(['1h', '6h', '24h'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setTimeRange(r)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    timeRange === r ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300"
            >
              {isStreaming ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
              <span>{isStreaming ? 'Pause' : 'Resume'}</span>
            </button>
          </div>
        </div>

        {/* Live metric summary */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-400">Current Stream Rate</div>
            <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">{currentThroughput} req/s</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-400">Average P99 Latency</div>
            <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mt-0.5">34 ms</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-400">WebSocket Connection</div>
            <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">Stable (0 Drops)</div>
          </div>
        </div>

        {/* Canvas chart representation */}
        <div className="p-4 rounded-lg bg-[#0d1017] border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>Payload Stream Telemetry (Canvas 60fps)</span>
            <span className="text-blue-400">Live Tick</span>
          </div>
          <div className="h-32 flex items-end gap-1.5 pt-4">
            {dataPoints.map((val, idx) => {
              const heightPercent = Math.round((val / maxVal) * 100);
              const isLast = idx === dataPoints.length - 1;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div
                    className={`w-full rounded-t transition-all duration-300 ${
                      isLast ? 'bg-blue-400' : 'bg-blue-600/60 group-hover:bg-blue-500'
                    }`}
                    style={{ height: `${heightPercent}%` }}
                    title={`Tick ${idx + 1}: ${val} req/s`}
                  />
                  <span className="text-[10px] font-mono text-slate-600">{idx * 5}s</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
      <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-sans">
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-indigo-400 font-semibold">Interactive Prototype</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Step-by-Step Checkout & Payment Switcher</span>
          </div>
          <div className="text-xs font-mono text-slate-400">2,000+ daily txns capacity</div>
        </div>

        {checkoutStep === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Cart Review:</div>
              {cart.map((item) => (
                <div key={item.id} className="p-3 rounded-lg bg-[#0d1017] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-slate-400 font-mono">Qty: {item.qty} · In Stock</div>
                  </div>
                  <div className="text-sm font-mono font-bold text-white">${item.price}</div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between font-mono text-sm">
              <span className="text-slate-300">Subtotal</span>
              <span className="font-bold text-white">${total}</span>
            </div>

            <button
              onClick={() => setCheckoutStep(2)}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Payment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {checkoutStep === 2 && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase">Select Payment Gateway:</div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod('stripe')}
                className={`p-3 rounded-lg border text-left transition-all ${
                  paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-950/20' : 'border-slate-800 bg-[#0d1017]'
                }`}
              >
                <div className="text-xs font-bold text-white">Stripe Checkout</div>
                <div className="text-[11px] text-slate-400 mt-0.5">PCI-DSS Tokenized</div>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-3 rounded-lg border text-left transition-all ${
                  paymentMethod === 'paypal' ? 'border-indigo-500 bg-indigo-950/20' : 'border-slate-800 bg-[#0d1017]'
                }`}
              >
                <div className="text-xs font-bold text-white">PayPal Express</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Instant Reconciliation</div>
              </button>
            </div>

            <div className="p-3 rounded bg-[#0d1017] border border-slate-800 space-y-2 text-xs">
              <div className="text-slate-400 font-mono">Simulated Card Token:</div>
              <div className="font-mono text-slate-300 p-2 bg-slate-900 rounded border border-slate-800">
                •••• •••• •••• 4242 | Exp: 12/28
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCheckoutStep(1)}
                className="py-2 px-3 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium hover:bg-slate-800"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => {
                    setIsProcessing(false);
                    setCheckoutStep(3);
                  }, 800);
                }}
                disabled={isProcessing}
                className="flex-1 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                {isProcessing ? <span>Reconciling...</span> : <span>Confirm & Pay ${total}</span>}
              </button>
            </div>
          </div>
        )}

        {checkoutStep === 3 && (
          <div className="p-6 rounded-lg bg-[#0d1017] border border-emerald-900/40 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white">Payment Successfully Reconciled</div>
            <p className="text-xs text-slate-400">
              Transaction token authenticated via {paymentMethod === 'stripe' ? 'Stripe Elements' : 'PayPal SDK'}. Zero state drift.
            </p>
            <button
              onClick={() => setCheckoutStep(1)}
              className="py-1.5 px-3 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
            >
              Reset Simulation
            </button>
          </div>
        )}
      </div>
    );
  }

  // Sentiment platform
  return (
    <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-sans">
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Interactive Prototype</span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">50k+ Reviews Sentiment Pipeline Tester</span>
        </div>
        <div className="text-xs font-mono text-slate-400">18% faster resolution</div>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-mono text-slate-400 uppercase">
          Enter Customer Review Text to Test Triage:
        </label>
        <textarea
          rows={2}
          value={reviewInput}
          onChange={(e) => analyzeReview(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#0d1017] border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-sans"
        />

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-mono text-[11px] self-center">Quick Samples:</span>
          <button
            onClick={() => analyzeReview('Love the high performance speed! Best developer UX I have experienced.')}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-[11px]"
          >
            Positive review
          </button>
          <button
            onClick={() => analyzeReview('The page loading time was slightly slow during initial catalog checkout.')}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-[11px]"
          >
            Moderate review
          </button>
          <button
            onClick={() => analyzeReview('Fatal bug on payment submit button. It froze during checkout!')}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-[11px]"
          >
            Critical negative review
          </button>
        </div>

        {/* Sentiment analysis outcome */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">Sentiment Classification</div>
            <div
              className={`text-sm font-bold mt-1 ${
                analyzedSentiment.sentiment === 'Positive'
                  ? 'text-emerald-400'
                  : analyzedSentiment.sentiment === 'Neutral'
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {analyzedSentiment.sentiment} ({analyzedSentiment.score}/100)
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">Model Confidence</div>
            <div className="text-sm font-bold text-white font-mono mt-1">{analyzedSentiment.confidence}%</div>
          </div>

          <div className="p-3 rounded-lg bg-[#0d1017] border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">Triage Priority</div>
            <div className="text-sm font-bold mt-1">
              {analyzedSentiment.isUrgent ? (
                <span className="text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> High Urgency
                </span>
              ) : (
                <span className="text-slate-300">Standard Queue</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
