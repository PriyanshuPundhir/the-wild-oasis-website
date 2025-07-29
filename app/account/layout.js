import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[14rem_1fr] h-full gap-10">
      <SideNavigation />
      <div className="py-1 px-10">{children}</div>
    </div>
  );
}
