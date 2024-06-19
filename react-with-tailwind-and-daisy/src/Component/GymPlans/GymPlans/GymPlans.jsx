import GymPlan from "../GymPlan/GymPlan";


const GymPlans = () => {
    const features = [
        {
          "id": 1,
          "plan": "Basic",
          "name": "Starter Plan",
          "price": "$29.99",
          "features": ["Access to gym", "1 personal training session", "Free Wi-Fi"]
        },
        {
          "id": 2,
          "plan": "Standard",
          "name": "Regular Plan",
          "price": "$49.99",
          "features": ["Access to gym", "5 personal training sessions", "Group classes", "Free Wi-Fi"]
        },
        {
          "id": 3,
          "plan": "Premium",
          "name": "Elite Plan",
          "price": "$79.99",
          "features": ["Access to gym", "Unlimited personal training sessions", "Group classes", "Sauna access", "Free Wi-Fi"]
        },
        {
          "id": 4,
          "plan": "Family",
          "name": "Family Bundle",
          "price": "$99.99",
          "features": ["Access to gym for 4 members", "Group classes", "Family personal training sessions", "Free Wi-Fi"]
        },
        {
          "id": 5,
          "plan": "Student",
          "name": "Student Saver",
          "price": "$24.99",
          "features": ["Access to gym", "2 personal training sessions", "Student discount", "Free Wi-Fi"]
        },
        {
          "id": 6,
          "plan": "Corporate",
          "name": "Business Plan",
          "price": "$149.99",
          "features": ["Access to gym for employees", "Corporate group classes", "On-site training sessions", "Free Wi-Fi"]
        }
      ]
      
      

    return (
        <div className="md:grid md:grid-cols-3 gap-5 mx-auto container">
            {
                features.map(feature => <GymPlan key={feature.id} feature={feature}></GymPlan>)
            }
        </div>
    );
};

export default GymPlans;