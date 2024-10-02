import Link from "next/link";
import {
  LayoutDashboardIcon,
  WalletMinimalIcon,
  LayoutGridIcon,
  BarChart3Icon,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboardIcon, href: "/dashboard" },
  { name: "Assets", icon: WalletMinimalIcon, href: "/assets" },
  { name: "Available Pools", icon: LayoutGridIcon, href: "/pools" },
  { name: "Your Investments", icon: BarChart3Icon, href: "/investments" },
];

export function Sidebar() {
  return (
    <section className="w-64 bg-primary-foreground shadow-md">
      <div className="p-6">
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-primary/50"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
