import React from 'react';
import { useAuth } from '@/AuthRoute';
import { motion } from 'framer-motion';


interface ProfileCardProps {
  isPremium: boolean;
  motivation: string;
  onViewProgress: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  isPremium,
  motivation,
  onViewProgress,
}) => {
  const { user } = useAuth();
  return (
    <motion.div className="bg-gray-800 p-5 flex items-center justify-between"
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    transition={{duration: 1}}
    variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    }}
    >
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full bg-gray-600 mr-4 overflow-hidden">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
          ) : null}
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold">{user?.displayName || 'Guest User'}</h2>
          {isPremium && (
            <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded-md">
              Premium User
            </span>
          )}
          <p className="text-gray-400 text-sm mt-1">{motivation}</p>
        </div>
      </div>
      <button
        onClick={onViewProgress}
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors duration-300"
      >
        View Progress
      </button>
    </motion.div>
  );
};

export default ProfileCard;