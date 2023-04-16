import { useNavigate } from "react-router-dom";

const Index = () => {
  // 路由跳转
  const router = useNavigate();

  function toDetail() {
    router("/detail");
  }

  return (
    <>
      <div>home 页</div>
      <br />
      <button onClick={toDetail}>去 detail</button>
      <br />
    </>
  );
};

export default Index;
