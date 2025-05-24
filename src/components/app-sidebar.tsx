import * as React from "react"
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger
} from "@/components/ui/sidebar"


import CardsIcon from '@/assets/icons/sidenav-comp/CreditCard'
import AccountIcon from "@/assets/icons/sidenav-comp/AccountIcon";
import AuthListIcon from "@/assets/icons/sidenav-comp/AuthorizationListIcon";
import AuthQueueIcon from "@/assets/icons/sidenav-comp/AuthorizationQueueIcon";
import BlockIcon from "@/assets/icons/sidenav-comp/BlockCardIcon";
import ComplaintsLogIcon from "@/assets/icons/sidenav-comp/ComplaintsLogIcon";
import BranchesIcon from "@/assets/icons/sidenav-comp/BranchesIcon";
import ProfileIcon from "@/assets/icons/sidenav-comp/CardProfileIcon";
import GeneratePinIcon from "@/assets/icons/sidenav-comp/GeneratePinIcon";
import SchemeIcon from "@/assets/icons/sidenav-comp/CardSchemeIcon";
import TrailIcon from "@/assets/icons/sidenav-comp/TrailIcon";
import StockIcon from "@/assets/icons/sidenav-comp/StockIcon";
import UsersIcon from "@/assets/icons/sidenav-comp/UsersIcon";
import ComplaintsResolveIcon from "@/assets/icons/sidenav-comp/ComplaintsResolveIcon";
import LogoutIcon from "@/assets/icons/sidenav-comp/LogoutIcon";
import RolesIcon from "@/assets/icons/sidenav-comp/UserShieldIcon";
import RequestIcon from "@/assets/icons/sidenav-comp/CardRequestIcon";
import DashboardIcon from "@/assets/icons/sidenav-comp/DashboardIcon";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      id: "1",
      title: "",
      url: "#",
      items: [{ title: "Dashboard", url: "/dashboard", icon: DashboardIcon }],
    },
    {
      id: "2",

      title: "Main menu",
      url: "#",
      items: [
        { title: "Branches", url: "/branches", icon: BranchesIcon },
        { title: "Roles", url: "/roles", icon: RolesIcon, isActive: true },
        { title: "Users", url: "/users", icon: UsersIcon },
        { title: "Card Scheme", url: "/card-scheme", icon: SchemeIcon },
        { title: "Card Profile", url: "/card-profile", icon: ProfileIcon },
        { title: "Card Request", url: "/card-request", icon: RequestIcon },
        { title: "Stock", url: "/stock", icon: StockIcon },
        { title: "Cards", url: "/cards", icon: CardsIcon },
        { title: "Block/Unblock Card", url: "/block-card", icon: BlockIcon },
        { title: "Generate/Reissue PIN", url: "/generate-pin", icon: GeneratePinIcon },
        {
          title: "Complaints: Log",
          url: "/complaints/log",
          icon: ComplaintsLogIcon,
        },
        {
          title: "Complaints: Resolve",
          url: "/complaints/resolve",
          icon: ComplaintsResolveIcon,
        },
        { title: "Authorization List", url: "/auth/list", icon: AuthListIcon },
        {
          title: "Authorization Queue",
          url: "/auth/queue",
          icon: AuthQueueIcon,
        },
        { title: "Trail", url: "/trail", icon: TrailIcon },
        { title: "Account", url: "/account", icon: AccountIcon },
      ],
    },
    {
      id: "3",

      title: "",
      url: "#",
      items: [{ title: "Logout", url: "/logout", icon: LogoutIcon }],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    
    <Sidebar {...props}>
      <SidebarHeader>
        <div
          className="
    sticky top-0 z-50        
    flex justify-between items-center
    h-auto
    bg-lapo-primary-blue      
  "
        >
          <div className="inline-block p-1 rounded bg-lapo-primary-blue">
            <Image
              src="images/lapo_logo.svg"
              alt="Lapo Logo"
              width={150}
              height={70}
              className="bg-lapo-primary-blue"
            />
          </div>
          <SidebarTrigger className="-ml-1" />
        </div>
      </SidebarHeader>
      <SidebarContent className="-mt-8">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.id}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <div>
                        <item.icon />

                        <a href={item.url}>{item.title}</a>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarHeader>
        <div
          className="
    sticky bottom-0 z-50        
    flex justify-between items-center
    h-auto
    bg-lapo-primary-blue      
  "
        >
          <div className="inline-block p-1 rounded bg-lapo-primary-blue">
            <div className="font-medium text-[10px]  text-[#7E8B9C]">
              POWERED BY
            </div>
            <Image
              src="images/cardinfra_logo.svg"
              alt="Lapo Logo"
              width={150}
              height={70}
              className="bg-lapo-primary-blue"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  );
}
