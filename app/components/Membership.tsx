// components/Membership.tsx
'use client';
import { memberships } from '../data/memberships';
import MembershipCard from './MembershipCard';

const Membership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#243B55] to-[#141E30] py-12 px-6 pt-[80px] flex flex-col items-center justify-center">
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Elige tu <span className="text-[#D43EFF]">Plan Perfecto</span>
        </h1>
        <h2 className="text-gray-400 text-xl">Te acompañamos en el proceso completo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] w-full">
        {memberships.map((plan, idx) => (
          <MembershipCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Membership;
