import { createFileRoute, redirect } from "@tanstack/react-router";
import useUserStore from "../../store/userStore.ts";

export const Route = createFileRoute("/home/")({
  beforeLoad: async () => {
    const { is_login } = useUserStore.getState(); // 获取当前的 is_login 状态
    if (!is_login) {
      throw redirect({ to: "/user/login" }); // 如果用户未登录，重定向到登录页面
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/"!</div>;
}
