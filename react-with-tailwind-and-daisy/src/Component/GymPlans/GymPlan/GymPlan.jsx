import PropTypes from 'prop-types';

const GymPlan = ({ feature }) => {
    const { plan, name, features, price } = feature;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body flex flex-col">
                <h2 className="card-title text-3xl pt-3 font-bold">{name}</h2>
                <h2 className="text-5xl py-5 font-extrabold">{price} <span className="text-2xl font-semibold">/Month</span> </h2>
                <p className="font-semibold text-2xl">{plan}</p>
                <div className="flex flex-col">
                    <ul>
                        {
                            features.map(feature => <li key={feature.id}>{feature}</li>)
                        }
                    </ul>
                </div>
                <div className="card-actions justify-end pt-5">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

GymPlan.propTypes = {
    feature: PropTypes.object
    
    }



export default GymPlan;