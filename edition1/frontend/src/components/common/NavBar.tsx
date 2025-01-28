import { Menu, MenuProps, Dropdown, Avatar, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  UserOutlined,
  LogoutOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/interface";
import useUserStore from "../../store/userStore.ts";
import { useNavigate } from "@tanstack/react-router";

const { Text } = Typography;

const items: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export const NavBar = () => {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);
  const userAvatar = useUserStore((state) => state.avatar);

  const handleLogout = () => {
    logout();
    navigate({
      to: "/user/login",
    });
  };

  // 用户下拉菜单的选项
  const userMenuItems: MenuItemType[] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Header style={{ display: "flex", alignItems: "center", width: "100%" }}>
      {/* 左侧区域：Logo 和菜单 */}
      <div className="text-white mr-6 font-bold text-xl">My Zone</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />

      {/* 右侧区域：用户头像和用户名（下拉菜单） */}
      <Dropdown menu={{ items: userMenuItems }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          {userAvatar === "" ? (
            <Avatar icon={<UserOutlined />} />
          ) : (
            <Avatar src={userAvatar} />
          )}
          <Text strong style={{ color: "white" }}>
            Username
          </Text>
          <CaretDownOutlined style={{ color: "white" }} />
        </div>
      </Dropdown>
    </Header>
  );
};
