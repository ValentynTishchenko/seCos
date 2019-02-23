import React from 'react';

import 'layaout-with-logo.scss';

const withLayoutWithLogo = ({children}) => (<div className='layout-with-logo'>
  {children}
</div>);
export default withLayoutWithLogo;
