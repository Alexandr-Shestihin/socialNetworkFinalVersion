import React, { Suspense } from 'react';
import Preload from '../common/preload/Preload';

export const withSuspense = (Component) => {

   return (props) => {
      return <Suspense fallback={<Preload />}>
         <Component {...props} />
      </Suspense>
   }

}