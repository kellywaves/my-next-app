// import { AppSidebar } from "@/components/app-sidebar";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { DashboardBreadcrumb } from "@/components/dashboard-breadcrumb";
// import { Logout } from "@/components/logout";
// import { ModeToggle } from "@/components/mode-toggle";


// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between border-b px-4">
//           <div className="flex items-center gap-2">
//             <SidebarTrigger className="-ml-1" />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <DashboardBreadcrumb />
//           </div>
         
//           <div className="flex items-center gap-2">
//             <ModeToggle />
//             <Logout />
//           </div>
//         </header>

//         <main className="flex flex-1 flex-col gap-4 p-4">
//           {children}
//         </main>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }




'use client';

import { ReactNode, useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin-sidebar';
import { DashboardHeader } from '@/components/dashboard-header';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const handleExport = () => {
    console.log('Exporting data...');
  };

  return (
    <>
    <SidebarProvider>
          <AdminSidebar />
          <SidebarInset>
            <DashboardHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onRefresh={handleRefresh}
              onExport={handleExport}
              isRefreshing={isRefreshing}
            />
    
            {children}
          </SidebarInset>
        </SidebarProvider>
    </>
  );
}

