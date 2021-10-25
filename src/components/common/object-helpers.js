export const createFollowUnfollow = (item, userId, objPopName, newObjProps) => {
   return item.map(u => {
      if (u[objPopName] === userId) {
         return { ...u, ...newObjProps }
      }
      return u;
   })
}

/* export const createFollowUnfollow = (item, userId, objPopName, newObjProps) => {
   return item.map(u => {
      if (u[objPopName] === userId) {
         return { ...u, followed: newObjProps }
      }
      return u;
   })
} */