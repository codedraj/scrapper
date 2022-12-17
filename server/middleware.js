const { autheticateToken, getRegisterData } = require("./firebase/firebase");
const UserModel = require("./models/user.models");

class Middleware {
  async AuthenticateFirmToken(req, res, next) {
    if (!req.header("authorization"))
      return res.status(403).json({
        auth: false,
      });
    let token = req.header("authorization").split(" ")[1];
    const userCheck = await autheticateToken(token);
    if (!userCheck) return res.status(403);
    const user = await UserModel.findOne({ uid: userCheck.uid });
    // const user = await FirmController.findByUid(firmCheck.uid);
    if (!user) {
      console.log("user Does Not Exist");
      return res.status(404).json({
        auth: false,
      });
    }
    req.user = user;
    next();
  }

  async registerFirmMiddleware(req, res, next) {
    if (!req.header("authorization")) return res.status(403);
    let token = req.header("authorization").split(" ")[1];
    // console.log(token);
    const userCheck = await getRegisterData(token);
    if (!userCheck) return res.status(403);
    req.user = userCheck;
    next();
  }
}

module.exports = new Middleware();
