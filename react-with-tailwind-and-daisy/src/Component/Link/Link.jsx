import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-4 hover:bg-[#3c4969] px-3 py-2 rounded-lg text-white">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.propTypes = {
route: PropTypes.object

}

export default Link;