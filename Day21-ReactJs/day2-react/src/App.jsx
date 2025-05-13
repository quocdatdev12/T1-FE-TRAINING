
import "./App.css";
import { Button } from "./components/category/Button";
import { Category } from "./components/category/Category";
import { Counter } from "./components/Counter/Counter";
import DemoProps from "./components/DemoProps";
import DemoState from "./components/DemoState";
import { MyInput } from "./components/MyInput";
import { WrapperComponents } from "./components/WrapperComponents";

function App() {
  const handlSubmitLogin = () => {
    alert("handlSubmitLogin");
  }
  const handlChange = (e) => {
    console.log(e.target.value,"eeeeee");
    

  }
  return (
    <div>
    {/* <DemoState></DemoState> */}
    {/* <DemoProps /> */}
    {/* <Category/>
    <Button classBtn ="btn-login" name="Login" handlCick={handlSubmitLogin} />

    <WrapperComponents classWrapper = "wrapper" >
      <h1>Hello Wrodl !</h1>
    </WrapperComponents> */}

    {/* <Button classBtn ="btn-login" handlCick={handlSubmitLogin} >
      Login
    </Button> */}
    {/* <MyInput type="text" placeholder="Nhập UserName" onChange={handlChange} /> */}
    <Counter />
    </div>
  );
}

export default App;
