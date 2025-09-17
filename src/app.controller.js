import connectDB from "./DB/connection.js";
import authRouter from "./Modules/Auth/auth.controller.js";
import userRouter from "./Modules/User/user.controller.js";
import menuRouter from "./Modules/Menu/menu.controller.js";
import orderRouter from "./Modules/Order/order.controller.js";

const bootstrap = async(app,express)=>{
    app.use(express.json());
    await connectDB();
    app.use("/auth",authRouter);
    app.use("/user",userRouter);
    app.use("/order",orderRouter);
    app.use("/menu",menuRouter);


}
export default bootstrap;