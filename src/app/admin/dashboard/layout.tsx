"use client";
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '../../providers';
import '../../globals.css'
import { signOut } from 'next-auth/react';

const poppins = Poppins({ weight: ['200', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Used Cars - Admin',
  description: 'Admin used cars page',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <div className="flex text-2xl cursor-pointer" onClick={() => router.push("/admin/dashboard")}>
          <h1 className="font-bold">Used</h1>
          <h1>Cars&nbsp;</h1>
          <h1>Admin</h1>
        </div>
        <div className="nav-button" onClick={() => { signOut(); router.push("/"); }}>
          <span className="font-bold">Sair</span>
        </div>
      </nav>
      <NextAuthProvider>{children}</NextAuthProvider>
    </>
  )
}
