/*商城vue-actions

 */
export default ({
    saveUserName(context, username) {
      context.commit('saveUsername',username);
    },
    saveCartCount(context,count){
        context.commit('saveUserName',count);
  
      }
})