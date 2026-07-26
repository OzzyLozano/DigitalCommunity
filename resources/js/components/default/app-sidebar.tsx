import { Link, usePage } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid } from 'lucide-react';
import LogoIcon from '@/components/mine/icons/logo';
import { NavFooter } from '@/components/default/nav-footer';
import { NavMain } from '@/components/default/nav-main';
import { NavUser } from '@/components/default/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/default/ui/sidebar';
import { company, dashboard, home } from '@/routes';
import type { NavItem } from '@/types';
import { useMemo } from 'react';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
    icon: LayoutGrid,
  },
];

const footerNavItems: NavItem[] = [
  {
    title: 'Repository',
    href: 'https://github.com/laravel/react-starter-kit',
    icon: FolderGit2,
  },
  {
    title: 'Documentation',
    href: 'https://laravel.com/docs/starter-kits#react',
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const { auth, name } = usePage().props;

  const mainNavItems = useMemo(() => {
    const items = [
      {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
      },
    ];

    if (auth.user?.role?.type === 'administrator') {
      items.push({
        title: 'Company',
        href: company(auth.user.id),
        icon: LayoutGrid,
      });
    }

    return items;
  }, [auth.user?.role?.type]);

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={home()} prefetch>
                <div className="flex items-end gap-4">
                  <LogoIcon />
                  <span className='font-semibold'>{name}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
