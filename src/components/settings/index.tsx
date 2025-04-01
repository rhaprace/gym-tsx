import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/components/db/firebaseapp";
import { useNavigate } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const Settings = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({ email: true, push: true });
  const [privacy, setPrivacy] = useState("public");
  const [subscription, setSubscription] = useState("Free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setTheme(data.theme || "light");
          setNotifications(data.notifications || { email: true, push: true });
          setPrivacy(data.privacy || "public");
          setSubscription(data.subscription || "Free");
        }
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const updateSettings = async (key: string, value: any) => {
    const user = auth.currentUser;
    if (!user) return;

    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, { [key]: value });
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateSettings("theme", newTheme);
  };

  const handleNotificationToggle = (type: "email" | "push") => {
    const updatedNotifications = { ...notifications, [type]: !notifications[type] };
    setNotifications(updatedNotifications);
    updateSettings("notifications", updatedNotifications);
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrivacy(e.target.value);
    updateSettings("privacy", e.target.value);
  };

  const handleSubscriptionChange = (plan: string) => {
    setSubscription(plan);
    updateSettings("subscription", plan);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <motion.div 
        className="w-full max-w-2xl p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-xl border border-white/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button onClick={() => navigate('/')}>
            <ArrowLongLeftIcon className="h-6 w-6 text-white hover:text-gray-300 transition" />
          </button>
        </div>

        {loading ? <p className="text-center">Loading...</p> : (
          <div className="grid grid-cols-2 gap-4">
            {/* Theme Selection */}
            <div className="flex justify-between items-center bg-white/10 p-4 rounded-lg shadow">
              <span className="font-semibold">Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={theme === "dark"} onChange={handleThemeToggle} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white/10 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-1">Privacy</h3>
              <select value={privacy} onChange={handlePrivacyChange} className="w-full p-2 rounded-lg border">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            {/* Notifications */}
            <div className="bg-white/10 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-1">Notifications</h3>
              <div className="flex justify-between">
                <span>Email</span>
                <input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle("email")} />
              </div>
              <div className="flex justify-between mt-2">
                <span>Push</span>
                <input type="checkbox" checked={notifications.push} onChange={() => handleNotificationToggle("push")} />
              </div>
            </div>

            {/* Subscription Management */}
            <div className="bg-white/10 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-1">Subscription</h3>
              <div className="flex justify-between">
                <button onClick={() => handleSubscriptionChange("Free")} className={`py-2 px-4 rounded-lg ${subscription === "Free" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Free</button>
                <button onClick={() => handleSubscriptionChange("Premium")} className={`py-2 px-4 rounded-lg ${subscription === "Premium" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Premium</button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Settings;
