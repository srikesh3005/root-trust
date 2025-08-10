import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award, CreditCard, Smartphone, Building, Check, Users, GraduationCap, Activity, Gift } from 'lucide-react';

interface DonatePageProps {
  onPageChange: (page: string) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ onPageChange }) => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>('general');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const causes = [
    {
      id: 'general',
      name: 'Where Most Needed',
      description: 'Supports our most urgent and impactful programs',
      icon: Heart,
      impact: 'Flexible funding for maximum impact'
    },
    {
      id: 'education',
      name: 'Education Programs',
      description: 'Support quality education initiatives and digital literacy',
      icon: GraduationCap,
      impact: '₹1000 can educate 1 child for a month'
    },
    {
      id: 'healthcare',
      name: 'Healthcare Services',
      description: 'Mobile medical units and essential healthcare access',
      icon: Activity,
      impact: '₹500 can provide healthcare for 1 person for 3 months'
    },
    {
      id: 'livelihood',
      name: 'Livelihood Development',
      description: 'Skills training and microfinance for sustainable income',
      icon: Users,
      impact: '₹2000 can train 1 person with marketable skills'
    }
  ];

  const amounts = [500, 1000, 2500, 5000, 10000];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Secure payment via Razorpay'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'Pay using UPI apps'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building,
      description: 'Direct bank transfer'
    }
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: '80G Tax Benefits',
      description: 'Get tax deduction under Section 80G'
    },
    {
      icon: Award,
      title: 'Certified NGO',
      description: 'Registered under section 12A and FCRA'
    },
    {
      icon: Check,
      title: '100% Transparency',
      description: 'Track how your donation is used'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', {
      type: donationType,
      amount: customAmount || selectedAmount,
      cause: selectedCause,
      paymentMethod
    });
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-16 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Make a Difference Today</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Your contribution creates lasting impact in underserved communities. 
            Every rupee donated goes directly toward building better futures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-600">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Choose Your Impact</h2>
              
              {/* Donation Type */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    donationType === 'one-time'
                      ? 'border-primary-600 bg-accent-100 text-primary-700'
                      : 'border-neutral-300 hover:border-primary-600 hover:bg-neutral-100'
                  }`}
                >
                  <div className="text-center">
                    <Gift className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">One-time</p>
                    <p className="text-sm text-primary-700">Single donation</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    donationType === 'monthly'
                      ? 'border-primary-600 bg-accent-100 text-primary-700'
                      : 'border-neutral-300 hover:border-primary-600 hover:bg-neutral-100'
                  }`}
                >
                  <div className="text-center">
                    <Heart className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">Monthly</p>
                    <p className="text-sm text-primary-700">Recurring donation</p>
                  </div>
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {setSelectedAmount(amount); setCustomAmount('');}}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all duration-200 ${
                        selectedAmount === amount && !customAmount
                          ? 'border-primary-600 bg-accent-100 text-primary-700'
                          : 'border-neutral-300 hover:border-primary-600 hover:bg-neutral-100'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-600">₹</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Cause Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Choose a Cause</h3>
                <div className="space-y-3">
                  {causes.map((cause) => (
                    <button
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        selectedCause === cause.id
                          ? 'border-primary-600 bg-accent-100'
                          : 'border-neutral-300 hover:border-primary-600 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <cause.icon className={`h-6 w-6 mt-1 ${
                          selectedCause === cause.id ? 'text-primary-600' : 'text-primary-600'
                        }`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary-800 mb-1">{cause.name}</h4>
                          <p className="text-primary-700 text-sm mb-2">{cause.description}</p>
                          <p className="text-primary-600 text-sm font-medium">{cause.impact}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-600">
              <h3 className="text-lg font-semibold text-primary-800 mb-4">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                      paymentMethod === method.id
                        ? 'border-primary-600 bg-accent-100'
                        : 'border-neutral-300 hover:border-primary-600 hover:bg-neutral-100'
                    }`}
                  >
                    <method.icon className="h-8 w-8 mx-auto mb-2 text-primary-600" />
                    <p className="font-semibold text-primary-800">{method.name}</p>
                    <p className="text-sm text-primary-700">{method.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="h-6 w-6" />
                <span>Donate ₹{finalAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}</span>
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trust Factors */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-600">
              <h3 className="text-lg font-bold text-primary-800 mb-4">Why Donate With Us?</h3>
              <div className="space-y-4">
                {trustFactors.map((factor, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-accent-100 p-2 rounded-lg">
                      <factor.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800">{factor.title}</h4>
                      <p className="text-sm text-primary-700">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-600">
              <h3 className="text-lg font-bold text-primary-800 mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {[
                  { name: 'Anonymous', amount: 5000, cause: 'Education', time: '2 minutes ago' },
                  { name: 'Priya S.', amount: 2500, cause: 'Healthcare', time: '15 minutes ago' },
                  { name: 'Rahul M.', amount: 1000, cause: 'General', time: '1 hour ago' },
                  { name: 'Anonymous', amount: 10000, cause: 'Livelihood', time: '3 hours ago' }
                ].map((donation, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                    <div>
                      <p className="font-medium text-primary-800">{donation.name}</p>
                      <p className="text-sm text-primary-700">{donation.cause} • {donation.time}</p>
                    </div>
                    <p className="font-bold text-primary-600">₹{donation.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-primary-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Your Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Lives Touched This Month:</span>
                  <span className="font-bold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Funds Raised:</span>
                  <span className="font-bold">₹12,45,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Projects:</span>
                  <span className="font-bold">15</span>
                </div>
              </div>
              <button
                onClick={() => onPageChange('projects')}
                className="w-full mt-4 bg-accent-100 text-primary-700 py-2 rounded-lg font-semibold hover:bg-accent-200 transition-colors duration-200"
              >
                View Our Impact
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonatePage;