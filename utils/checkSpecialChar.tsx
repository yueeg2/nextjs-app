// 目標字串不可包含特殊字元
export const isSpecialchars = (targetString: string) => {
  let desired = targetString.replace(/[a-zA-Z0-9_.-]/gm, '') //過濾掉字母、數字、下底線、點、破折號
  if (desired.length > 0) //有特殊字元
    return true
  else
    return false
};