// components/MembershipCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Membership } from '../data/memberships';

interface Props {
  plan: Membership;
}

const MembershipCard = ({ plan }: Props) => {
  return (
    <div
      className={`bg-[#1B1E32] rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-all border border-[#353B50] hover:border-[${plan.borderColor}] hover:shadow-2xl`}
    >
      <div>
      {plan.isPopular ? (
        <div className="popular-badge shadow mb-2">
          🔥 Popular
        </div>
      ) : (
        <div className="professional-badge mb-2">
          Plan Profesional
        </div>
      )}

      {plan.logo && (
        <div className="w-[64px] h-[64px] mb-3">
          <Image
            src={plan.logo}
            alt={`Logo de ${plan.name}`}
            width={64}
            height={64}
            className="rounded"
          />
        </div>
      )}

        <h2 className={`text-[${plan.color}] text-2xl font-bold mb-4`}>{plan.name}</h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">{plan.description}</p>
        <div className="text-white font-bold text-4xl lg:text-6xl mb-4">{plan.price}</div>
        <div className="text-left space-y-3 mb-6">
          {plan.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center">
              <Image
                src={benefit.icon}
                alt={benefit.label}
                width={80}
                height={80}
                className="w-8 h-8 mr-3"
              />
              <p className="text-gray-300 text-xs md:text-base">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href={plan.href}>
        <div
          className={`py-2 px-4 rounded-full text-center border border-[${plan.color}] text-[${plan.color}] hover:bg-[${plan.color}] hover:text-black transition-all`}
        >
          Conocer Más
        </div>
      </Link>
    </div>
  );
};

export default MembershipCard;
