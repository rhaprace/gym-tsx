import React, { useState } from 'react';
import ProfileCard from '@/components/dashboard/Profile';
import WeightCard from './WeightCard';
import ProgressCard from './ProgressCard';


const DashBoard: React.FC = () => {
  const isPremiumUser = true;
  const motivationalText = "Welcome to your dashboard!";
  const handleViewProgress = () => {
    console.log("View Progress clicked from Dashboard");
  };


  return (
        <div>
          <ProfileCard
            isPremium={isPremiumUser}
            motivation={motivationalText}
            onViewProgress={handleViewProgress}
          />
          <WeightCard />
          <ProgressCard />
        </div>
  );
};

export default DashBoard;
