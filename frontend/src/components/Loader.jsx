import React from 'react';
import loader from '../assets/img/general/cetalks-logo_animated.svg';

const Loader = () => {


return (
<div id="loader" className="h-screen w-screen overflow-hidden bg-07060e flex items-center justify-center" >
<object type="image/svg+xml" data={loader} className='w-1/3 h-1/3'>

</object>

</div>
);
}
export default Loader;