'use client';                                     // C.5 Navigation Between Pages - 2. 2.	Pattern: Showing active links

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';                     // C.5 Navigation Between Pages - 1. The <Link> component
import { usePathname } from 'next/navigation';    // C.5 Navigation Between Pages - 2. 2.	Pattern: Showing active links

import clsx from 'clsx';                          // C.5 Navigation Between Pages - 2. 2.	Pattern: Showing active links

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // <a
          <Link                                   // C.5 Navigation Between Pages - 1. The <Link> component
            key={link.name}
            href={link.href}
            // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"

            // className={clsx(                      // C.5 Navigation Between Pages - 2. 2.	Pattern: Showing active links
            //   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            //   {
            //     'bg-sky-100 text-blue-600': pathname === link.href,
            //   },
            // )}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
            pathname === link.href ? 'bg-sky-100 text-blue-600' : ''
          }`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
          // </a>
        );
      })}
    </>
  );
}
