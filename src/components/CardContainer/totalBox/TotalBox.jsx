import PropTypes from 'prop-types';


const TotalBox = ({ total }) => {
    return (
        <div className='totalBox flex'>
            <p className='w-4/5 text-right font-bold text-xl'>Preu pressupostat:</p>
            <p className='text-xl w-1/5 text-right font-bold text-xl'>{total}<span className='text-sm'> €</span></p>
        </div>
    );
};


TotalBox.propTypes = {
    total: PropTypes.number
};


export default TotalBox;
